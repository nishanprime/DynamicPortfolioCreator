import { useContext, useEffect, useState } from 'react';
import { FaPlus, FaMinus, FaCheck } from 'react-icons/fa';
import UserContext from '../userContext';

const DynamicForm = ({ retrieveProjects, projects }) => {
  console.log(projects);
  let tempProjects = [...projects];
  //dynamic form fields
  const [projectDetails, setProjectDetails] = useState(tempProjects);
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...projectDetails];
    list[index][name] = value;
    setProjectDetails(list);
    //send back project details to calling component
    retrieveProjects(list);
  };

  return (
    projectDetails && (
      <div>
        {projectDetails.map((project, index) => {
          return (
            <div className="flex gap-6 justify-between mt-3 mb-5" key={index}>
              <>
                <div className="col-span-2 flex-none">
                  <label
                    htmlFor="projectName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="project-title"
                    required
                    id="project-title"
                    value={project['project-title']}
                    placeholder="Enter the name of your project"
                    onChange={(e) => handleChange(e, index)}
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-2 flex-none">
                  <label
                    htmlFor="projectDescription"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Link
                  </label>
                  <input
                    required
                    type="text"
                    name="project-link"
                    id="project-link"
                    value={project['project-link']}
                    placeholder="https://"
                    onChange={(e) => handleChange(e, index)}
                    autoComplete="family-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-3 flex-1">
                  <label
                    htmlFor="project-description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <input
                    required
                    type="text"
                    name="project-description"
                    id="project-description"
                    value={project['project-description']}
                    placeholder="Enter your Project Description Here"
                    onChange={(e) => handleChange(e, index)}
                    autoComplete="family-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </>
            </div>
          );
        })}
        <div className="flex gap-3 mt-5">
          <button
            className="p-3"
            onClick={() => {
              //if last object is filled then click else don't click
              let lastObject = projectDetails[projectDetails.length - 1];
              if (
                lastObject['project-title'] &&
                lastObject['project-link'] &&
                lastObject['project-description']
              ) {
                setProjectDetails([
                  ...projectDetails,
                  {
                    'project-title': '',
                    'project-link': '',
                    'project-description': '',
                  },
                ]);
              } else {
                return;
              }
            }}
          >
            <FaPlus />
          </button>
          <div
            className="p-3 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white cursor-pointer"
            onClick={() => {
              //send back project details to calling component
              retrieveProjects(projectDetails);
              //slice last element if length is greater than 0
              if (projectDetails.length > 1) {
                setProjectDetails(projectDetails.slice(0, -1));
              } else {
                setProjectDetails(projectDetails);
              }
            }}
          >
            <FaMinus />
          </div>
        </div>
      </div>
    )
  );
};
export default DynamicForm;
