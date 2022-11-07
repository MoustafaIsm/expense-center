import { ChatItem } from 'src/app/interfaces/ChatItem';
import { Message } from 'src/app/interfaces/Message';

export const getCurrentDate = (): string => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = today.getMonth() + 1;
  const dd = today.getDate();

  return `${dd < 10 ? '0' + dd : dd}-${mm < 10 ? '0' + mm : mm}-${yyyy}`;
};

export const getCurrentDateTime = (): string => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = today.getMonth() + 1;
  const dd = today.getDate();
  const hh = today.getHours();
  const min = today.getMinutes();

  return `${dd < 10 ? '0' + dd : dd}-${mm < 10 ? '0' + mm : mm}-${yyyy} ${hh < 10 ? '0' + hh : hh}:${min < 10 ? '0' + min : min}`;
};

export const convertToChatItem = (data: any, id: string): ChatItem => {
  const chatItem: ChatItem = {
    id,
    firstUserId: data.firstUserId,
    secondUserId: data.secondUserId,
    latestMessage: {
      sentBy: data.latest_message.senderId,
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
