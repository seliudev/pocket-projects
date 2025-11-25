const About: React.FC = () => {
    return (
        <div className="flex flex-col gap-3 items-center justify-center min-h-screen bg-indigo-200 p-6 border-8 border-dotted rounded-4xl">
            <h1 className="text-indigo-950 text-2xl">About this project,</h1>
            <p className="p-10 text-indigo-950 text-l italic ">
                "Hi! I’m Seliudev, a passionate learner exploring web development through small projects.
                Each project you see here is a step in practicing new skills, experimenting with React, TypeScript,
                Tailwind, and other technologies. This page is my playground to apply what I learn and share my
                progress."
            </p>

        </div>
    );
}

export default About;