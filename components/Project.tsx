"use client";
import { IProject } from "@/types";
import { useEffect, useState } from "react";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
//components
import ProjectDisplay from "./ProjectDisplay";

const Project = () => {
    const [projLimit, setProjLimit] = useState(true);
    const [projects, setProjects] = useState([]);

    const authorization = process.env.NEXT_PUBLIC_API_AUTHORIZATION ?? "";

    useEffect(() => {
        async function getProjects() {
            const res = await fetch("../api/projects/routes", {
                headers: {
                    authorization: authorization,
                },
                next: {
                    revalidate: 1,
                },
            });
            const data = await res.json();
            if (res.ok) {
                setProjects(data);
            }
        }

        getProjects();
    }, [authorization]);

    
    return (
        <div className="mt-16 lg:mt-24 flex flex-col gap-y-10 items-center ">
            <h2 className="project__title">Projects</h2>
            {projects.map((project: IProject, index: number) => {
                if (projLimit && index > 2) return;
                return <ProjectDisplay key={index} {...project} />;
            })}

            {projects.length >= 3 && (
                <button
                    className="text-md md:text-xl mt-24 font-medium flex items-center md:gap-1"
                    onClick={() => {
                        setProjLimit((prev) =>
                            prev === true ? (prev = false) : (prev = true)
                        );
                    }}
                >
                    {projects.length >= 3 && projLimit
                        ? `Show all projects`
                        : `Show less projects`}
                    {projLimit ? (
                        <MdOutlineExpandMore className="text-2xl md:text-3xl" />
                    ) : (
                        <MdOutlineExpandLess className="text-2xl md:text-3xl" />
                    )}
                </button>
            )}
        </div>
    );
};

export default Project;
