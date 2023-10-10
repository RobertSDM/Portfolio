export interface ProjectProps {
    name: string;
    description: string;
    projectLink: string;
    imgDesktop?: string;
    imgMobile?: string;
}

export interface DisplayProps {
    img: string | null;
    description?: string;
    projectLink: string;
    name: string;
    styleLink?: string;
    height?: number;
    width?: number;
    textStyles?: { color:string, size:string};
}
