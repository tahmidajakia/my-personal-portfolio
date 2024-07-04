import { useEffect, useState } from "react";
import ProjectsCard from "./ProjectsCard";


const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('projects.json')
        .then(res => res.json())
        .then(data => {
            setProjects(data)
        })

    })
    return (
        <div id='projects' className="p-4 md:pl-28 md:pr-28">
            <h1 className="text-center text-4xl font-bold mb-9 mt-14">My Recent Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-10 mb-14 gap-24">
                {
                    projects.map(project => <ProjectsCard 
                        key={project._id}
                        project={project}
                    ></ProjectsCard> )
                }
            </div>
        </div>
    );
};

export default Projects;