import { ChatItem } from 'src/app/interfaces/ChatItem';
import { Message } from 'src/app/interfaces/Message';

export const getCurrentDate = (): string => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = today.getMonth() + 1;
  const dd = today.getDate();

  return `${dd < 10 ? '0' + dd : dd}/${mm < 10 ? '0' + mm : mm}/${yyyy}`;
};

export const convertToChatItem = (data: any, id: string): ChatItem => {
  const chatItem: ChatItem = {
    id,
    firstUserId: data.first_user_id,
    secondUserId: data.second_user_id,
    latestMessage: {
      sentBy: data.latest_message.sender_id,
      message: data.latest_message.message,
      timeStamp: data.latest_message.timeStamp
    },
    messages: []
  };
  return chatItem;
};

export const convertToMessage = (data: any, id: string): Message => {
  const message: Message = {
    id,
    sentBy: data.sentBy,
    message: data.message,
    timeStamp: data.timeStamp
  };
  return message;
};
