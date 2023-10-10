const About = () => {
    return (
        <div className="mt-10 md:ml-5 lg:ml-10">
            <h2 className="about__title">
                About
            </h2>
            <div className="mt-10 md:max-w-[500px] md:ml-5 text-text-light dark:text-text-dark opacity-70 space-y-4">
                <p>
                    Hello, my name is Roberto Menezes, I&apos;m a Brazilian and
                    I&apos;m 19 years. My journey in development started early in 2023, when I joined the university.
                </p>
                <p>
                    Regarding programming, what I like the most is the logic
                    aspect, I enjoy solving problems and facing challenges to
                    create the application that I want.
                </p>
                <p>
                    Initially, my goal was to become a Graphic Designer, but
                    recently, I shifted my focus and started in the programming
                    field with an emphasis on Front-end development.
                </p>
                <p>
                    Currently, I&apos;m in my second semester of studying
                    Analysis and Systems Development at{" "}
                    <strong>Fiap University.</strong>
                </p>
            </div>
        </div>
    );
};

export default About;
