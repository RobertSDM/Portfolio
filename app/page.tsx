//components
import About from '@/components/About';
import Banner from '@/components/Banner';
import Links from '@/components/LinksBanner';
import Project from '@/components/Project';

export default function Home() {
    return (
        <>
            <div className="container__banner">
                <Banner />
                <Links />
            </div>
            <About />
            <Project />
        </>
    );
}
