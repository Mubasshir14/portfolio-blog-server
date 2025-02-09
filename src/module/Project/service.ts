/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Project } from './module';

export const createProject = async (data: any) => {
  try {
    const project = new Project(data);
    await project.save();
    return project;
  } catch (error) {
    throw new Error('Error while creating project ');
  }
};

export const getAllProjects = async () => {
  try {
    return await Project.find();
  } catch (error) {
    throw new Error('Error while fetching projects: ');
  }
};

export const getProjectById = async (id: string) => {
  try {
    const project = await Project.findById(id);
    if (!project) throw new Error('Project not found');
    return project;
  } catch (error) {
    throw new Error('Error while fetching project: ');
  }
};

export const updateProject = async (id: string, data: any) => {
  try {
    const project = await Project.findByIdAndUpdate(id, data, { new: true });
    if (!project) throw new Error('Project not found');
    return project;
  } catch (error) {
    throw new Error('Error while updating project: ');
  }
};

export const deleteProject = async (id: string) => {
  try {
    const project = await Project.findByIdAndDelete(id);
    if (!project) throw new Error('Project not found');
    return project;
  } catch (error) {
    throw new Error('Error while deleting project: ');
  }
};

export const ProjectService = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
