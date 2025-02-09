/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Message } from './model';

export const createMessage = async (data: any) => {
  try {
    const message = new Message(data);
    await message.save();
    return message;
  } catch (error) {
    throw new Error('Error while creating project ');
  }
};

export const getAllMessage = async () => {
  try {
    return await Message.find();
  } catch (error) {
    throw new Error('Error while fetching projects: ');
  }
};

export const MessageService = {
  createMessage,
  getAllMessage,
};
