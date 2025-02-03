import { formatChatDate, formatChatTime } from "./date";
import { ChatMessageDTO } from "../models/chat";
import { ChatMessageProps } from "../types/chat";

interface GroupedMessagesProps {
  senderId: number;
  groupId: number;
  items: ChatMessageProps[];
}

export const groupingMessages = (messages: ChatMessageDTO[]) => {
  if (messages.length === 0) return [];

  const groupedMessages: GroupedMessagesProps[] = [];
  let prevSenderId = -1;
  let prevDate = "";
  let groupId = 0;
  let newItem: GroupedMessagesProps = {
    senderId: -1,
    groupId: -1,
    items: [],
  };

  messages.forEach((message) => {
    const date = formatChatDate(message.createdAt);
    if (prevDate !== date) {
      prevDate = date;
      groupedMessages.push({
        senderId: -1,
        groupId: -1,
        items: [
          {
            chatId: -1,
            message: "",
            time: date,
          },
        ],
      });
    }

    if (prevSenderId !== message.senderId) {
      if (prevSenderId !== -1) groupedMessages.push(newItem);
      newItem = {
        senderId: message.senderId,
        groupId: groupId++,
        items: [
          {
            chatId: message.chatId,
            message: message.message,
            time: formatChatTime(message.createdAt),
          },
        ],
      };
      prevSenderId = message.senderId;
    } else if (prevSenderId === message.senderId) {
      newItem.items.push({
        chatId: message.chatId,
        message: message.message,
        time: formatChatTime(message.createdAt),
      });
    }
  });

  groupedMessages.push(newItem);

  return groupedMessages;
};
