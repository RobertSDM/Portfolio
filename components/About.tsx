import Link from 'next/link';

const About = () => {
    return (
        <div className="mt-10 md:ml-5 lg:ml-10">
            <h2 className="after:content-[''] after:absolute after:bg-bg-light after:derk:bg-bg-light after:w-10 after:rounded-full after:h-[3px] after:left-0 after:-bottom-1 text-lg relative font-semibold">
                About
            </h2>
            <p className="mt-10 md:max-w-[500px] md:ml-5 text-text-light dark:text-text-dark opacity-70">
                Hello, my name is Roberto Menezes, I&apos;m a Brazilian, I have
                19 years. At developing I have 8 months of experience and
                knowledge.
                <br />
                <br />
                About programming the part i like the most is the logic part, i
                like to resolve problems and challenges to create the
                application that I want.
                <br />
                <br />
                At first, my goal was to become a Graphic Design, but recently,
                I shifted my focus and started in the programming field with an
                emphasis on Front-end development. <br />
                <br />
                Currently, I am in my second semester of studying Analysis and
                Systems Development at{' '}
                <strong className="hover:text-light-green">
                    Fiap University.
                </strong>
            </p>
        </div>
    );
};

export default About;
