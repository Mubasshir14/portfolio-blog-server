import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProjectRoute } from './module/Project/route';
import { BlogRouter } from './module/Blog/route';
import { MessageRouter } from './module/Message/route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3001', 'https://personal-portfolio-blog-nu.vercel.app'],
    credentials: true,
  }),
);

// application route
app.use('/api/projects', ProjectRoute);
app.use('/api/blogs', BlogRouter);
app.use('/api/message', MessageRouter);

const getAController = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Running 🏃‍♂️🏃‍♂️🏃🏃',
  });
};

app.get('/', getAController);

export default app;
