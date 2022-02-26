import React from 'react';

let projects = ['fuck'];
const ProjectCard = (data) => {
  data = data.data;
  projects = data.map(function (project) {
    projects = project;
    return `<div>${project.projectName}</div>`;
  });
  console.log(projects);

  return projects;
};
export default ProjectCard;
