import React, { useContext } from 'react';
import ProjectItem from './ProjectItem';
import PeronalProject from './PeronalProject';
import { CurrentUser } from '../../pages/user/[username]';
const Projects = () => {
  const data = useContext(CurrentUser);
  const { personalProjects } = data;
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="sm:text-center lg:text-left text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        {/* <h2 className="sm:text-center lg:text-left py-4">
          Commercial Level Products (Internship)
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Event Simplify"
            backgroundImg="assets/projects/event-simplify.png"
            projectUrl="/event-simplify"
            tech="NEXT JS | Node JS | MongoDB"
          />
          <ProjectItem
            title="MindSetts"
            backgroundImg="assets/projects/mindsetts_cover.png"
            projectUrl="/mindsetts"
            tech="React JS | Node JS | MongoDB"
          />
        </div> */}
        <h2 className="py-4 mt-10">Personal Projects</h2>
        {personalProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <PeronalProject
                key={index}
                porjectName={project['project-title']}
                link={project['project-link']}
                description={project['project-description']}
              />
            ))}
          </div>
        ) : (
          //h1 saying no projects to show
          <div className="text-center">
            <p className="text-red-500 font-bold text-lg">No Projects Added</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
