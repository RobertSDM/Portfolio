import ProjectDisplay from './ProjectDisplay';
import projects from '../projects.json';
import { ProjectProps } from '@/types';

const Project = () => {
    return (
        <div className="mt-32 lg:mt-40 flex flex-col items-center">
            <h2
                className="after:content-[''] after:absolute after:dark:bg-bg-light after:bg-bg-dark 
            after:w-16 after:rounded-full after:h-[3px] after:left-0 after:-bottom-3 
            text-3xl relative font-semibold"
            >
                Projects
            </h2>
            {projects.map((project: ProjectProps, index) => (
                <ProjectDisplay key={index} {...project} />
            ))}
        </div>
    );
};

export default Project;
