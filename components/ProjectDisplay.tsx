import { ProjectProps } from "@/types";
import Link from "next/link";
import React from "react";
import Display from "./Display";

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
                {/* Mobile project view */}
                <div className="mobile">
                    <Display
                        styleLink="text-sm text-white"
                        name={name}
                        img={imgMobile || null}
                        projectLink={projectLink}
                        width={160}
                        height={320}
                        textStyles={{
                            size: "lg:text-2xl",
                            color: "bg-[#0C7146]",
                        }}
                    />
                </div>
            </div>
            {/* Description */}
            <div className="lg:space-y-3 md:space-y-4 self-start">
                <h2 className="text-xl lg:text-4xl md:text-2xl font-semibold md:font-bold">
                    {name}
                </h2>
                <p
                    className={`mb-5 ${
                        !imgDesktop ? "lg:block" : "lg:hidden"
                    } md:text-xl text-md`}
                >
                    {description}
                </p>
                {imgDesktop && <Link href={projectLink} className="underline md:text-xl lg:hidden block font-medium">See more-&gt;</Link>}
            </div>
        </section>
    );
};

export default ProjectDisplay;
