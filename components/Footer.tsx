'use client';
import { BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import Social from './Social';

const Footer = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <footer className="relative mt-52 flex flex-col w-full pb-5 bottom-0 gap-5 items-center">
            <div className="flex w-full items-center">
                <div className="flex-1 h-[2px] lg:h-[3px] bg-text-light dark:bg-text-dark rounded-full" />
                <div className="flex flex-1 justify-center items-center gap-5 lg:gap-12">
                    <Social
                        icon={<BiLogoGithub className="text-4xl lg:text-5xl" />}
                    />
                    <Social
                        icon={
                            <BiLogoLinkedin className="text-4xl lg:text-5xl" />
                        }
                    />
                </div>
                <div className="flex-1 h-[2px] lg:h-[5px] bg-text-light dark:bg-text-dark rounded-full" />
            </div>
            <p className="text-text-light mt-10 mb-5 dark:text-text-dark">
                Roberto Menezes <span className="text-[12px]">©</span> 2023
            </p>
        </footer>
    );
};

export default Footer;
