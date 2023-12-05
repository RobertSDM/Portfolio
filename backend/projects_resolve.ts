import { IProject } from "@/types";

let projects: IProject[] = [];

const findAllProjects = () => {
    return projects;
};

const deleteProject = (id: string) => {
    let deletedProject: IProject | null = null;
    const filterById = (p: IProject) => {
        if (p.id !== id) {
            return p;
        } else {
            deletedProject = p;
        }
    };

    projects = projects.filter(filterById);
    return deletedProject;
};

const createProject = (project: IProject) => {
    project["id"] = crypto.randomUUID();

    projects.push(project);

    return project;
};

const updateProject = (id: string, newProject: IProject) => {
    let foundProject: boolean | null = false;
    const findIndex = (p: IProject) => {
        if (p.id === id) {
            foundProject = true;
            return true;
        }
        return false;
    };

    const indexProject = projects.findIndex(findIndex);
    if (indexProject >= 0) {
        const updatedProjectId: string = projects[indexProject].id!;
        projects[indexProject] = newProject;
        projects[indexProject].id = updatedProjectId;
    }
    return foundProject;
};

export { findAllProjects, deleteProject, createProject, updateProject };
