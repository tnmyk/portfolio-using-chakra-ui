import {
  Box,
  Button,
  Heading, ListItem,
  Text,
  UnorderedList,
  useColorModeValue
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { projects } from '../data/projects';
import Contact from './Contact';
import Project from './Project';
import TimelineContainer from './TimelineContainer';

const Dashboard = () => {
  
  return (
    <Box>
      <Heading mt="5rem" fontSize="5xl">
        Hi! I m Tanmay 👋
      </Heading>
      <Text
        mt="1rem"
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
      <Box color={useColorModeValue('gray.700', 'gray.300')} ml="1rem">
        <Text fontSize="lg" fontWeight="bold" mt="1rem">
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
        <Text fontSize="lg" fontWeight="bold" mt="1rem">
          Desktop Application Development
        </Text>
        <UnorderedList ml="2.5rem" mt="0.5rem">
          <ListItem>Electron.js</ListItem>
        </UnorderedList>
      </Box>
      <Heading mt="3rem" fontSize="4xl">
        Timeline
      </Heading>
      <TimelineContainer limit={2} />
      <RouterLink to="/timeline">
        <Button
          color={useColorModeValue('black', 'white')}
          colorScheme="gray"
          ml="2rem"
          mt="1rem"
        >
          See Full Timeline ⌚
        </Button>
      </RouterLink>

      <Heading mt="3rem" fontSize="4xl">
        Projects
      </Heading>
      <Box>
        {projects.map(project => {
          return (
            <Project
              title={project.title}
              snippet={project.snippet}
              key={Math.random()}
            />
          );
        })}
      </Box>
      <div id="contact"></div>
      <Contact />
    </Box>
  );
};

export default Dashboard;
