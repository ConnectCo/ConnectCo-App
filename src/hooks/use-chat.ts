import { useEffect, useRef, useState } from "react";

import { Client, IFrame, IMessage, StompConfig } from "@stomp/stompjs";

import { ChatMessageDTO } from "../models/chat";

const socketEndpoint = process.env.EXPO_PUBLIC_CHAT_URL;

export const useChat = (
  chatRoomId: number,
  receiverId: number,
  setMessageList: (message: React.SetStateAction<ChatMessageDTO[]>) => void
) => {
  const [message, setMessage] = useState("");
  const [hasConnection, setConnection] = useState(false);

  const client = useRef<Client | null>(null);

  const sendMessage = () => {
    if (message.trim() === "") return;

    client.current?.publish({
      destination: `/app/${chatRoomId}`,
      body: JSON.stringify({
        chatRoomId,
        senderId: 1,
        receiverId,
        message: message,
      }),
    });

    setMessage("");
  };

  const onChangeText = (e: string) => {
    setMessage(e);
  };

  const disConnect = () => {
    if (client.current === null) return;

    client.current?.deactivate();
  };

  const callback = function (message: IMessage) {
    if (message.body) {
      const msg = JSON.parse(message.body);
      setMessageList((prev) => [...prev, msg.result]);
    }
  };

  useEffect(() => {
    const stompConfig: StompConfig = {
      brokerURL: socketEndpoint,
      debug: (frame: any) => console.log(frame),

      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      forceBinaryWSFrames: true,
      appendMissingNULLonIncoming: true,
    };

    if (!client.current) {
      client.current = new Client(stompConfig);
      client.current.onConnect = () => {
        setConnection(true);
        console.log(`connected to ${stompConfig.brokerURL}`);
        client.current?.subscribe(`/topic/${chatRoomId}`, callback);
      };
      client.current.onDisconnect = (error: IFrame) => {
        console.log(`disconnected to  ${stompConfig.brokerURL}`);
        console.log(error);
      };
      client.current.onDisconnect = (error: IFrame) => {
        console.log(`error to  ${stompConfig.brokerURL}`);
        console.log(error);
      };

      client.current?.activate();
    }

    return () => disConnect();
  }, [chatRoomId]);

  return { message, onChangeText, sendMessage, hasConnection };
};
