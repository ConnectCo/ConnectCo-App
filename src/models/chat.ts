export interface ChatMessageDTO {
  senderId: number;
  chatId: number;
  message: string;
  createdAt: string;
}

export interface ChatListDTO {
  chatRoomId: number;
  otherMemberId: number;
  otherMemberName: string;
  recentMessage: string;
  recentMessageTime: string;
  profileImage: string;
  unreadCount: number;
}
