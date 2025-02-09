import { Router } from 'express';
import { BlogController } from './controller';

const router = Router();

router.post('/', BlogController.createBlog);
router.get('/', BlogController.getAllBlogs);
router.get('/:id', BlogController.getBlogById);
router.put('/:id', BlogController.updateBlog);
router.delete('/:id', BlogController.deleteBlog);

export const BlogRouter = router;
