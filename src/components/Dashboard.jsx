import { Box, Heading, ListItem, Text, UnorderedList, useColorModeValue } from '@chakra-ui/react';
import { projects } from '../data/projects';
import Contact from './Contact';
import Project from './Project';

const Dashboard = () => {
  return (
    <Box width="60%" marginX="auto" pb="5rem">
      <Heading mt="3rem" fontSize="5xl">
        Hi! I m Tanmay 👋
      </Heading>
      <Text
        mt="1rem"
        f
        fontSize="lg"
        color={useColorModeValue('gray.600', 'gray.300')}
      >
        I'm a developer and designer based in India.
        <br /> I'm a React.js enthusiast and very interested in Ux/Ui Designing.{' '}
        <br /> I'm always thinking about startups.
      </Text>
      <Heading mt="4rem" fontSize="4xl">
        Skills
      </Heading>
      <Box color={useColorModeValue('gray.700', 'gray.300')} mt="1rem" ml="1rem">
        <Text fontSize="lg" fontWeight="bold">
          Web Development
        </Text>
        <UnorderedList ml="2.5rem" mt="0.5rem">
          <ListItem>React.js</ListItem>
          <ListItem>Node.js</ListItem>
          <ListItem>Firebase</ListItem>
          <ListItem>Javascript</ListItem>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
        </UnorderedList>
      </Box>
      <Heading mt="3rem" fontSize="4xl">
        Projects
      </Heading>
      <Box>
        {projects.map(project => {
          return <Project title={project.title} snippet={project.snippet} />;
        })}
      </Box>
      <Contact />
    </Box>
  );
};

export default Dashboard;
