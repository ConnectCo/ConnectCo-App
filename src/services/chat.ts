import { api } from "../apis";
import { BaseResponseDTO } from "../models";
import { ChatListDTO } from "../models/chat";
import { ChatMessageDTO } from "../models/chat";

export const getChatMessage = async (
  chatRoomId: number
): Promise<BaseResponseDTO<ChatMessageDTO[]>> => {
  const { data } = await api.get(`/chat/room/${chatRoomId}/chats`);
  return data;
};

export const getChatList = async (profileId: number): Promise<BaseResponseDTO<ChatListDTO[]>> => {
  const { data } = await api.get(`/chat/rooms?profileId=${profileId}`);
  return data;
};
