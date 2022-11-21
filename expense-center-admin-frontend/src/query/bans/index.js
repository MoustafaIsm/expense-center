import { adminInstance } from '../axios';

export const banUser = async (userId) => {
    return await adminInstance.post(`/bans/add_ban`, { user_id: userId });
}

export const unbanUser = async (userId) => {
    return await adminInstance.post(`/bans/remove_ban`, { user_id: userId });
}