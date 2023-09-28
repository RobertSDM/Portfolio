import Link from 'next/link';
import { ReactNode } from 'react';

const Social = ({icon, href}:{icon:ReactNode, href: string}) => {
    return (
        <Link
            href={href}
            className="hover:-translate-y-2 transition-transform duration-200"
            target="_blank"
        >
            {icon}
        </Link>
    );
};

export default Social;
