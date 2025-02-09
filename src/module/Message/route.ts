import { Router } from 'express';
import { MessageController } from './controller';

const router = Router();

router.post('/', MessageController.createMessage);
router.get('/', MessageController.getAllMessage);

export const MessageRouter = router;
