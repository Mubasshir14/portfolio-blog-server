import mongoose, { Schema } from 'mongoose';
import { IMessage } from './interface';

const messageSchema: Schema<IMessage> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Message = mongoose.model<IMessage>('Message', messageSchema);
