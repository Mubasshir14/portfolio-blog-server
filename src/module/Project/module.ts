import mongoose, { Schema } from 'mongoose';
import { IProject } from './interface';

const projectSchema: Schema<IProject> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    mockup: {
      type: String,
      required: true,
      trim: true,
    },
    github: {
      type: String,
      required: true,
      trim: true,
    },
    live: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    technologies: {
      type: [String],
      required: true,
      validate: {
        validator: function (value: string[]) {
          return value.length > 0;
        },
        message: 'At least one technology must be selected',
      },
    },
  },
  {
    timestamps: true,
  },
);

export const Project = mongoose.model<IProject>('Project', projectSchema);
