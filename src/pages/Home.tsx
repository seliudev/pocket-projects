import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import lightswitch from "../assets/lightswitch.jpeg";
import counter from "../assets/counter.jpeg";
import calculator from "../assets/calculator.jpeg";

const Home: React.FC = () => {
    const projects = [
        {
            title: "Light Switch",
            description: "Toggle lights on and off to practice state.",
            href: "/light-switch",
            image: lightswitch,
        },
        {
            title: "Calculator",
            description: "Perform basic arithmetic operations.",
            href: "/calculator",
            image: calculator,
        },
        {
            title: "Counter",
            description: "A simple increment and decrement counter.",
            href: "/counter",
            image: counter,
        },
    ];

    const [startIndex, setStartIndex] = useState(0);

    const prev = () => setStartIndex((prev) => (prev - 1 + projects.length) % projects.length);
    const next = () => setStartIndex((prev) => (prev + 1) % projects.length);

    const getVisibleProjects = () => [
        projects[startIndex % projects.length],
        projects[(startIndex + 1) % projects.length],
        projects[(startIndex + 2) % projects.length],
    ];

    return ( <div className="flex flex-col items-center mt-10"> <h1 className="text-4xl font-bold text-indigo-950 mb-6">Pocket Projects</h1>

        <div className="flex items-center space-x-4">
            <button
                onClick={prev}
                className="px-4 py-2 bg-indigo-950 text-white rounded hover:bg-indigo-400 hover:cursor-pointer"
            >
                ◀
            </button>

            <div className="grid grid-cols-3 gap-6">
                {getVisibleProjects().map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        href={project.href}
                        image={project.image}
                    />
                ))}
            </div>

            <button
                onClick={next}
                className="px-4 py-2 bg-indigo-950 text-white rounded hover:bg-indigo-400 hover:cursor-pointer"
            >
                ▶
            </button>
        </div>
    </div>

);
};

export default Home;
