import { Box } from "@chakra-ui/react";
import { projects } from "../data/projects";
import Project from "./Project";

const ProjectsContainer = ({ limit }) => {
  return (
    <Box>
      {projects.map((project, index) => {
        if (index > limit) return null;
        return (
          <Project
            title={project.title}
            snippet={project.snippet}
            key={Math.random()}
          />
        );
      })}
    </Box>
  );
};

export default ProjectsContainer;
