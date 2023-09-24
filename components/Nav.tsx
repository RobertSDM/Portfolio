'use client';
import Image from 'next/image';
import { useState } from 'react';

const Nav = () => {
    const [theme, setTheme] = useState('light');
    return (
        <>
            <div className="px-8 py-4">
                {theme === 'light' ? (
                    <Image
                        src="/imgs/moon.png"
                        alt="moon icon"
                        width={30}
                        height={30}
                        className="cursor-pointer"
                    />
                ) : (
                    <Image
                        src="/imgs/sun.png"
                        alt="moon icon"
                        width={30}
                        height={30}
                        className="cursor-pointer"
                    />
                )}
            </div>
        </>
    );
};

export default Nav;
