interface IProject {
    id?: string;
    name: string;
    description: string;
    projectLink: string;
    imgDesktop: string;
    technologies: string[];
    languages: string[];
}

interface DisplayProps {
    img: string | null;
    description?: string;
    projectLink: string;
    name: string;
    styleLink?: string;
    height?: number;
    width?: number;
    textStyles?: { color: string; size: string };
}

export type { IProject, DisplayProps };
