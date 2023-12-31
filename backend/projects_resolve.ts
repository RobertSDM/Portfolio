import { IProject } from "@/types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const findAllProjects = async () => {
    try {
        const projects = await prisma.projects.findMany();
        return projects;
    } catch (error) {
        return false;
    }
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
    try {
        const createdProject = await prisma.projects.create({
            data: {
                name: project.name,
                description: project.description,
                projectLink: project.projectLink,
                imgDesktop: project.imgDesktop,
                technologies: project.technologies,
                languages: project.languages,
                githubLink: project.githubLink,
            },
        });

        return createdProject;
    } catch (error) {
        return false;
    }
};

const updateProject = async (id: number, newProject: IProject) => {
    try {
        const project = await prisma.projects.update({
            data: {
                name: newProject.name,
                description: newProject.description,
                projectLink: newProject.projectLink,
                imgDesktop: newProject.imgDesktop,
                technologies: newProject.technologies,
                languages: newProject.languages,
                githubLink: newProject.githubLink,
            },
            where: {
                id: id,
            },
        });

        return project;
    } catch (error) {
        return false;
    }
};

export { findAllProjects, createProject, deleteProject, updateProject };
