"use client";
import { DisplayProps, IProject } from "@/types";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const ProjectDisplay = ({
    description,
    name,
    imgDesktop,
    projectLink,
}: IProject) => {

    return (
        <section className="display">
            <div className="relative ">
                <h2 className="hidden lg:block text-xl lg:text-2xl md:text-2xl font-semibold md:font-bold">
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
            <div className="lg:space-y-3 md:space-y-4 self-start">
                <h2 className="block lg:hidden text-xl lg:text-2xl md:text-2xl font-semibold md:font-bold">
                    {name}
                </h2>
                <p
                    className={`mb-5 ${
                        !imgDesktop ? "lg:block" : "lg:hidden"
                    } md:text-xl text-md`}
                >
                    {description}
                </p>
                {imgDesktop && (
                    <Link
                        href={projectLink}
                        className="underline md:text-xl lg:hidden block font-medium"
                    >
                        See more-&gt;
                    </Link>
                )}
            </div>
        </section>
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
    textStyles,
}: DisplayProps) => {
    return (
        <>
            {img ? (
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
            ) : (
                <div
                    className={`${textStyles?.color} group w-full h-full grid
                place-items-center`}
                >
                    <p
                        className={`font-bold text-xl transition-opacity duration-150 text-[#12FF9A] lg:group-hover:opacity-100 lg:opacity-0 ${textStyles?.size} md:text-3xl`}
                    >
                        Soon
                    </p>
                </div>
            )}
        </>
    );
};

export default ProjectDisplay;
