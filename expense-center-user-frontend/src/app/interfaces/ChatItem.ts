

export interface ChatItem {
  id: string;
  firstUserId: number;
  secondUserId: number;
  lastMessage: {
    sentBy: number;
    message: string;
    timeStamp: string;
  };
  messages: Message[];
}
