import React from "react";

type ProjectCardProps = {
    title: string;
    description: string;
    href: string;
    image?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, href, image }) => {
    return (
        <a
            href={href}
            className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            style={{ width: "250px", height: "250px", textDecoration: "none", color: "inherit" }}
        >
            {image && (
                <img src={image} alt={title} className="w-full h-full object-cover" />
            )}

            <div className="absolute bottom-0 left-0 right-0 bg-indigo-950 bg-opacity-60 p-3">
                <h2 className="text-lg font-semibold text-white">{title}</h2>
                <p className="text-sm text-gray-200">{description}</p>
            </div>
        </a>
    );
};

export default ProjectCard;
