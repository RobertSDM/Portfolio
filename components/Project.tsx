"use client";
import { ProjectProps } from "@/types";
import { useState } from "react";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
//components
import ProjectDisplay from "./ProjectDisplay";
import projects from "../utils/projects.json";

const Project = () => {
    const [projLimit, setProjLimit] = useState(true);

    const handleProjLimit = () => {
        setProjLimit((prev) =>
            prev === true ? (prev = false) : (prev = true)
        );
    };

    return (
        <div className="mt-32 lg:mt-40 flex flex-col items-center">
            <h2 className="project__title">Projects</h2>
            {projects.map((project: ProjectProps, index: number) => {
                if (projLimit && index > 2) return;
                return <ProjectDisplay key={index} {...project} />;
            })}

            <button
                className="text-md md:text-xl mt-24 font-medium flex items-center md:gap-1"
                onClick={handleProjLimit}
            >
                {projLimit ? `Show all projects` : `Show less projects`}
                {projLimit ? (
                    <MdOutlineExpandMore className="text-2xl md:text-3xl" />
                ) : (
                    <MdOutlineExpandLess className="text-2xl md:text-3xl" />
                )}
            </button>
        </div>
    );
};

export default Project;
