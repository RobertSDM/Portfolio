'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Links = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    
    return (
        <div className="flex justify-end md:absolute md:top-3/4 md:left-[90%]">
            <div className="flex flex-col items-center gap-5">
                <div className="h-[68px] w-[2px] lg:w-[5px] lg:h-[85px] bg-text-light dark:bg-text-dark rounded-full"></div>

                <Link href="https://github.com/RobertSDM">
                    <Image
                        src={
                            theme === undefined
                                ? '/imgs/github-icon-light.png'
                                : theme === 'light'
                                ? '/imgs/github-icon-light.png'
                                : '/imgs/github-icon-dark.png'
                        }
                        alt="Github icon"
                        width={150}
                        height={0}
                        className="aspect-auto w-[30px] lg:w-[40px] cursor-pointer hover:-translate-y-2 transition-transform duration-200"
                    />
                </Link>
                <Link href="https://linkedin.com/in/roberto-menezes">
                    <Image
                        src={
                            theme === undefined
                                ? '/imgs/linkedin-icon-light.png'
                                : theme === 'light'
                                ? '/imgs/linkedin-icon-light.png'
                                : '/imgs/linkedin-icon-dark.png'
                        }
                        alt="linkedin icon"
                        width={50}
                        height={0}
                        className="aspect-auto w-[30px] lg:w-[40px] cursor-pointer hover:-translate-y-2 transition-transform duration-200"
                    />
                </Link>
            </div>
        </div>
    );
};

export default Links;
