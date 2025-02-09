/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { MessageService } from './service';

export const createMessage = async (req: Request, res: Response) => {
  try {
    const messageData = req.body;
    const newMessage = await MessageService.createMessage(messageData);
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const getAllMessage = async (req: Request, res: Response) => {
  try {
    const message = await MessageService.getAllMessage();
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const MessageController = {
  createMessage,
  getAllMessage,
};
