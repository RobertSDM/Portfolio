import About from '@/components/About';
import Banner from '@/components/Banner';
import Links from '@/components/Links';

export default function Home() {
    return (
        <main className='flex flex-col'>
            <div className='flex md:max-w-4xl w-full lg:max-w-full md:items-center mt-10 lg:mt-24 flex-col-reverse md:flex-col relative'>
                <Banner />
                <Links />
            </div>
            <About/>
        </main>
    );
}
