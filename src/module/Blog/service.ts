/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Blog } from './model';

export const createBlog = async (data: any) => {
  try {
    const blog = new Blog(data);
    await blog.save();
    return blog;
  } catch (error) {
    throw new Error('Error while creating blog: ');
  }
};

export const getAllBlogs = async () => {
  try {
    return await Blog.find();
  } catch (error) {
    throw new Error('Error while fetching blogs: ');
  }
};

export const getBlogById = async (id: string) => {
  try {
    const blog = await Blog.findById(id);
    if (!blog) throw new Error('Blog not found');
    return blog;
  } catch (error) {
    throw new Error('Error while fetching blog: ');
  }
};

export const updateBlog = async (id: string, data: any) => {
  try {
    const blog = await Blog.findByIdAndUpdate(id, data, { new: true });
    if (!blog) throw new Error('Blog not found');
    return blog;
  } catch (error) {
    throw new Error('Error while updating blog: ');
  }
};

export const deleteBlog = async (id: string) => {
  try {
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) throw new Error('Blog not found');
    return blog;
  } catch (error) {
    throw new Error('Error while deleting blog: ');
  }
};

export const BlogService = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
