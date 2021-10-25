import { Box, Heading } from '@chakra-ui/react';
import ProjectsContainer from './ProjectsContainer';

const Timeline = () => {
  return (
    <Box mt="3rem">
      <Heading>My Products</Heading>
      <ProjectsContainer limit='1000'/>
    </Box>
  );
};

export default Timeline;
