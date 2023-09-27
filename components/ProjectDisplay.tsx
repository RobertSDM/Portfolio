import { ProjectProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const ProjectDisplay = ({
    description,
    name,
    imgDesktop,
    projectLink,
    imgMobile,
}: ProjectProps) => {
    return (
        <section className="display">
            <div className="relative ">
                <div className="desktop">
                    {/* Desktop project view */}
                    {imgDesktop ? (
                        <div className="group relative h-full">
                            <Image
                                src={imgDesktop}
                                alt={`Image project ${name}`}
                                fill
                                className="object-cover rounded-xl -z-10 group-hover:brightness-[20%]"
                            />
                            <div className=" hidden break-words text-white text-center max-w-xs group-hover:lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <p className="mb-5">{description}</p>
                                <Link
                                    href={projectLink}
                                    className="font-semibold underline"
                                >
                                    See more -&gt;
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div
                            className="bg-[#0B3B27] group w-full h-full grid
                place-items-center"
                        >
                            <p
                                className=" text-[#12FF9A] lg:group-hover:opacity-100 lg:opacity-0 
                    transition-opacity duration-150 font-bold text-xl lg:text-5xl"
                            >
                                Soon
                            </p>
                        </div>
                    )}
                </div>
                {/* Mobile project view */}
                <div className="mobile">
                    {imgMobile ? (
                        <div className="group">
                            <Image
                                src={imgMobile}
                                alt={`Project ${name} image`}
                                width={160}
                                height={320}
                                className="object-cover -z-10 group-hover:brightness-[20%]"
                            />
                            <div className="w-full text-center hidden max-w-xs group-hover:lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <Link
                                    href={projectLink}
                                    className="font-semibold underline text-sm text-white"
                                >
                                    See more -&gt;
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className=" group lg:grid hidden h-full place-items-center bg-[#0C7146]">
                            <p
                                className=" text-[#12FF9A] lg:group-hover:opacity-100 lg:opacity-0 
                    transition-opacity duration-150 font-bold text-xl lg:text-2xl"
                            >
                                Soon
                            </p>
                        </div>
                    )}
                </div>
            </div>
            {/* Description */}
            <div className="lg:space-y-3 self-start">
                <h2 className="text-xl lg:text-4xl font-semibold">{name}</h2>
                <p className={`mb-5 ${!imgDesktop ? "lg:block" : "lg:hidden"}`}>{description}</p>
            </div>
        </section>
    );
};

export default ProjectDisplay;
