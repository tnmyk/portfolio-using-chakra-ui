import { Box, Heading } from '@chakra-ui/react';
import ProjectsContainer from './ProjectsContainer';
import { AiOutlineGithub } from 'react-icons/ai';

const Timeline = () => {
  return (
    <Box mt="3rem">
      <Heading>My Products</Heading>
      <ProjectsContainer limit="1000" />

      <Box textAlign='center'>

      View more of my projects on{' '}
      <a target="_blank" rel="noreferrer" href="https://github.com/tnmyk" style={{textDecoration:'underline'}}>
       my Github
        <AiOutlineGithub
          style={{
            display: 'inline-flex',
            marginLeft: '0.2rem',
            verticalAlign: '-2px',
          }}
        />
      </a>
      </Box>
    </Box>
  );
};

export default Timeline;
