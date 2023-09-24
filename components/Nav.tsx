'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';

const Nav = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <>
            <div className="border-black max-h-16 py-4">
                {theme === 'light' ? (
                    <BiSolidMoon
                        className="text-2xl cursor-pointer"
                        onClick={changeTheme}
                    />
                ) : (
                    <BiSolidSun
                        className="text-2xl cursor-pointer"
                        onClick={changeTheme}
                    />
                )}
            </div>
        </>
    );
};

export default Nav;
