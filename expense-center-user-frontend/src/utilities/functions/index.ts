import { ChatItem } from 'src/app/interfaces/ChatItem';
import { Message } from 'src/app/interfaces/Message';
import { User } from 'src/app/interfaces/User';

export const saveUserData = (user: User) => {
  localStorage.setItem('id', `${user.id}`);
  localStorage.setItem('username', user.username);
  localStorage.setItem('email', user.email);
  localStorage.setItem('gender', user.gender);
  localStorage.setItem('date_of_birth', user.date_of_birth);
  localStorage.setItem('profile_picture_url', user.profile_picture_url);
  localStorage.setItem('nbr_of_childern', `${user.nbr_of_childern}`);
  localStorage.setItem('relationship_status', user.relationship_status);
  localStorage.setItem('chat_enabled', `${user.chat_enabled}`);
  localStorage.setItem('education_feild', user.education_feild);
  localStorage.setItem('work_feild', user.work_feild);
  localStorage.setItem('job_title', user.job_title);
  localStorage.setItem('income', `${user.income}`);
  localStorage.setItem('outcome', `${user.outcome}`);
  localStorage.setItem('yearly_salary', `${user.yearly_salary}`);
  localStorage.setItem('living_location_id', `${user.living_location_id}`);
  localStorage.setItem('token', user.token);
};

export const stringifyDate = (date: Date): string => {
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();

  return `${dd < 10 ? '0' + dd : dd}-${mm < 10 ? '0' + mm : mm}-${yyyy}`;
};

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
      sentBy: data.latestMessage.sentBy,
      message: data.latestMessage.message,
      timeStamp: data.latestMessage.timeStamp
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
