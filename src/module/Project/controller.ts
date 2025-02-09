/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { ProjectService } from './service';

export const createProject = async (req: Request, res: Response) => {
  try {
    const projectData = req.body;
    const newProject = await ProjectService.createProject(projectData);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await ProjectService.getAllProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = await ProjectService.getProjectById(id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const projectData = req.body;
    const updatedProject = await ProjectService.updateProject(id, projectData);
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await ProjectService.deleteProject(id);
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const ProjectController = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
