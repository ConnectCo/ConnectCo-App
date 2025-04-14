export interface ChatMessageDTO {
  senderId: number;
  chatId: number;
  message: string;
  createdAt: string;
}

export interface ChatListDTO {
  chatRoomId: number;
  otherProfileId: number;
  otherProfileName: string;
  recentMessage: string;
  recentMessageTime: string;
  // profileImage: string;
  // unreadCount: number;
}

export interface ChatRoomDTO {
  chatRoomId: number;
  chatList: ChatMessageDTO[];
}
