'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi';
import Social from './Social';

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
                <div className="h-[68px] w-[2px] lg:w-[5px] lg:h-[85px] bg-text-light dark:bg-text-dark rounded-full" />
                <Social
                    icon={<BiLogoGithub className="text-4xl lg:text-5xl" />}
                />
                <Social
                    icon={<BiLogoLinkedin className="text-4xl lg:text-5xl" />}
                />
            </div>
        </div>
    );
};

export default Links;
