import { IProject } from "@/types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const findAllProjects = async () => {
    const projects = await prisma.projects.findMany();
    return projects;
};

const deleteProject = async (id: number) => {
    try {
        const project = await prisma.projects.delete({
            where: {
                id: id,
            },
        });
        return project;
    } catch (error) {
        return false;
    }
};

const createProject = async (project: IProject) => {
    const createdProject = await prisma.projects.create({
        data: {
            name: project.name,
            description: project.description,
            projectLink: project.projectLink,
            imgDesktop: project.imgDesktop,
        },
    });

    return createdProject;
};

const updateProject = async (id: number, newProject: IProject) => {
    try{
      const project = await prisma.projects.update({
        data: {
          name: newProject.name,
          description: newProject.description,
          projectLink: newProject.projectLink,
          imgDesktop: newProject.imgDesktop,
        },
        where: {
          id: id
        }
      })
      
      return project
    }catch (error){
      return false
    }
};

export { findAllProjects, createProject, deleteProject, updateProject };
