"use client";
import { DisplayProps, IProject } from "@/types";
import Link from "next/link";
import React from "react";
import Image from "next/image";

type Datasheet = {
    technologies: string[];
    languages: string[];
};

const ProjectDisplay = ({
    description,
    name,
    imgDesktop,
    projectLink,
    technologies,
    languages,
}: IProject) => {
    return (
        <section className="max-w-sm md:w-fit lg:max-w-3xl flex gap-y-4 justify-center flex-col">
            <div className="flex gap-x-2 md:flex-col md:max-w-2xl lg:max-w-full w-full items-center p-2">
                <div className="relative">
                    <h2 className=" lg:block text-xl lg:text-2xl md:text-2xl font-semibold md:font-bold">
                        {name}
                    </h2>
                    <div className="desktop">
                        {/* Desktop project view */}

                        <Display
                            name={name}
                            img={imgDesktop || null}
                            projectLink={projectLink}
                            description={description}
                            textStyles={{
                                size: "lg:text-5xl",
                                color: "bg-[#0B3B27]",
                            }}
                        />
                    </div>
                </div>
                {/* Description */}
                <div className="lg:space-y-3 self-start">
                    <p
                        className={`mb-5 ${
                            !imgDesktop ? "lg:block" : "lg:hidden"
                        } md:text-md text-md mt-6`}
                    >
                        {description}
                    </p>
                    {imgDesktop && (
                        <Link
                            href={projectLink}
                            className="text-sm font-semibold bg-green-500 p-2 rounded-md lg:hidden"
                        >
                            See more-&gt;
                        </Link>
                    )}
                </div>
            </div>
            <Datasheet technologies={technologies} languages={languages} />
        </section>
    );
};

const Datasheet = ({ languages, technologies }: Datasheet) => {
    return (
        <div className="block lg:space-y-2">
            {/* Languages */}
            <div className="w-full space-y-2">
                <h2 className="font-semibold hidden lg:block">Languages</h2>
                <div className="flex items-center gap-4 flex-wrap w-fit">
                    {languages.map((language) => (
                        <span
                            key={language}
                            className="bg-green-900 text-green-400 rounded-full p-1 px-4 font-semibold"
                        >
                            {language.toLowerCase()}
                        </span>
                    ))}
                </div>
            </div>
            {/* Technologies */}
            <div className="w-full space-y-2">
                <h2 className="font-semibold hidden lg:block">Technologies</h2>
                <div className="flex items-center gap-4 flex-wrap">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="bg-green-900 text-green-400 rounded-full p-1 px-4 font-semibold"
                        >
                            {tech.toLowerCase()}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Display = ({
    img,
    description,
    projectLink,
    name,
    styleLink,
    height,
    width,
}: DisplayProps) => {
    return (
        <>
            {img && (
                <div className="group relative h-full">
                    {height ? (
                        <Image
                            src={img}
                            alt={`Image project ${name}`}
                            height={height}
                            width={width}
                            className="object-cover rounded-xl -z-10 group-hover:brightness-[20%] group-hover:scale-105"
                        />
                    ) : (
                        <Image
                            src={img}
                            alt={`Image project ${name}`}
                            fill
                            className="object-cover rounded-xl -z-10 lg:group-hover:brightness-[20%] group-hover:scale-105 transition-transform duration-150"
                        />
                    )}
                    <div className=" hidden break-words text-white text-center max-w-xs group-hover:lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        {description && <p className="mb-5">{description}</p>}
                        <Link
                            href={projectLink}
                            target="_blank"
                            className={`text-sm font-semibold bg-green-500 p-2 rounded-md ${styleLink}`}
                        >
                            See more-&gt;
                        </Link>
                    </div>
                </div>
            )}
            )
        </>
    );
};

export default ProjectDisplay;
