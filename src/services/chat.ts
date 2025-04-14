import { api } from "../apis";
import { PROFILE } from "../constants/user";
import { BaseResponseDTO } from "../models";
import { ChatListDTO, ChatRoomDTO } from "../models/chat";
import { ChatMessageDTO } from "../models/chat";

export const getChatMessage = async (
  chatRoomId: number
): Promise<BaseResponseDTO<ChatMessageDTO[]>> => {
  const { data } = await api.get(`/chat/rooms/${chatRoomId}/chats`);
  return data;
};

export const getChatList = async (profileId: number): Promise<BaseResponseDTO<ChatListDTO[]>> => {
  const { data } = await api.get(`/chat/rooms?profileId=${profileId}`);
  return data;
};

export const enterChatRoom = async ({
  otherProfileId,
  otherProfileType,
}: {
  otherProfileId: number;
  otherProfileType: PROFILE;
}): Promise<BaseResponseDTO<ChatListDTO>> => {
  const { data } = await api.post(
    `/chat/rooms/enter?otherProfileId=${otherProfileId}&otherProfileType=${otherProfileType}`
  );
  return data;
};

export const createChatRoom = async ({
  senderId,
  receiverId,
  senderProfileType,
  receiverProfileType,
}: {
  senderId: number;
  receiverId: number;
  senderProfileType: PROFILE;
  receiverProfileType: PROFILE;
}): Promise<BaseResponseDTO<ChatRoomDTO>> => {
  const { data } = await api.post(
    `/chat/rooms?senderId=${senderId}&receiverId=${receiverId}&senderProfileType=${senderProfileType}&receiverProfileType=${receiverProfileType}`
  );
  return data;
};
