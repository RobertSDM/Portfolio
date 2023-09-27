import Image from 'next/image';

const Banner = () => {
    return (
        <div className="banner">
            <div className="z-10">
                <p className="text-light-green text-xl lg:text-2xl font-semibold">
                    Hello, I&apos;m
                </p>
                <h1 className="font-black  dark:text-text-dark text-3xl lg:text-6xl">
                    Roberto Menezes
                </h1>
                <p className="font-semibold mt-5 text-2xl lg:text-4xl">
                    <span className="text-light-green">Frontend</span> Developer
                </p>
            </div>
            <Image
                src="/imgs/banner-patern.png"
                alt="banner patern"
                width={500}
                height={0}
                className="md:block hidden md:w-[500px] lg:w-[820px] aspect-auto absolute right-10 "
            />
        </div>
    );
};

export default Banner;
