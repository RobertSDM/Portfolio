import { DisplayProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

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
                            className="object-cover rounded-xl -z-10 group-hover:brightness-[20%]"
                        />
                    ) : (
                        <Image
                            src={img}
                            alt={`Image project ${name}`}
                            fill
                            className="object-cover rounded-xl -z-10 lg:group-hover:brightness-[20%]"
                        />
                    )}
                    <div className=" hidden break-words text-white text-center max-w-xs group-hover:lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        {description && <p className="mb-5">{description}</p>}
                        <Link
                            href={projectLink}
                            target="_blank"
                            className={`font-semibold underline ${styleLink}`}
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

export default Display;
