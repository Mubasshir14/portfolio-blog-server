export interface IBlog extends Document {
  name: string;
  image: string;
  description: string;
  topic: string;
  date: Date;
}
