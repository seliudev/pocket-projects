import React from "react";
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

    return (
        <div>
            <h1 className="text-4xl font-bold text-indigo-950 flex justify-center m-5">
                Pocket Projects
            </h1>

            <div className="flex justify-center mt-10">
                <div className="grid grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            href={project.href}
                            image={project.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
