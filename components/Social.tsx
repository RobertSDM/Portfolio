import Link from 'next/link';
import { ReactNode } from 'react';

const Social = ({icon}:{icon:ReactNode}) => {
    return (
        <Link
            href="https://github.com/RobertSDM"
            className="hover:-translate-y-2 transition-transform duration-200"
        >
            {icon}
        </Link>
    );
};

export default Social;
