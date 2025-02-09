/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { BlogService } from './service';

export const createBlog = async (req: Request, res: Response) => {
  try {
    const blogData = req.body;
    const newBlog = await BlogService.createBlog(blogData);
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await BlogService.getAllBlogs();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const getBlogById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const blog = await BlogService.getBlogById(id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const blogData = req.body;
    const updatedBlog = await BlogService.updateBlog(id, blogData);
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await BlogService.deleteBlog(id);
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const BlogController = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
