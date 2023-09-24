import Banner from '@/components/Banner';
import Links from '@/components/Links';

export default function Home() {
    return (
        <>
            <div className='flex mt-10 lg:mt-24 flex-col-reverse md:flex-col relative'>
                <Banner />
                <Links />
            </div>
        </>
    );
}
