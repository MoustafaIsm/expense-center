import { Message } from './Message';

export interface ChatItem {
  id: string;
  firstUserId: number;
  secondUserId: number;
  latestMessage: {
    sentBy: number;
    message: string;
    timeStamp: string;
  };
  messages: Message[];
}
