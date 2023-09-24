'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Footer = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <footer className="relative mt-20 flex flex-col w-full pb-5 bottom-0 gap-5 items-center">
            <div className="flex w-full items-center">
                <div className="flex-1 w-[68px] h-[2px] lg:h-[5px] lg:2-[85px] bg-text-light dark:bg-text-dark rounded-full" />
                <div className="flex flex-1 justify-center gap-5">
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
                <div className="flex-1 h-[2px] lg:h-[5px] bg-text-light dark:bg-text-dark rounded-full" />
            </div>
            <p className="text-text-light dark:text-text-dark">
                Roberto Menezes <span className="text-[12px]">©</span> 2023
            </p>
        </footer>
    );
};

export default Footer;
