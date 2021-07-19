import {
  Box,
  Button,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Contact from './Contact';
import ProjectsContainer from './ProjectsContainer';
import TimelineContainer from './TimelineContainer';

const Dashboard = () => {
  return (
    <Box>
      <Heading mt="5rem" fontSize={['3xl', '4xl', '4xl', '5xl']}>
        Hi! I m Tanmay 👋
      </Heading>
      <Text
        mt="1rem"
        fontSize="lg"
        color={useColorModeValue('gray.600', 'gray.300')}
      >
        I'm a developer and designer based in India.
        <br /> I'm recently started ❤ing React.js. I also like UX/UI Designing
        my own products. <br /> I'm always thinking about creating new and
        better products.
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
          <ListItem>Next.js</ListItem>
          <ListItem>Chakra UI</ListItem>
          <ListItem>Node.js</ListItem>
          <ListItem>Firebase</ListItem>
          <ListItem>Javascript</ListItem>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
          <ListItem>Sometimes I also use MongoDB, C++, Python etc.</ListItem>
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
      <ProjectsContainer limit="2" />
      <RouterLink to="/projects">
        <Button
          color={useColorModeValue('black', 'white')}
          colorScheme="gray"
          ml="2rem"
          mt="1rem"
        >
          See More Products 🔎
        </Button>
      </RouterLink>
      <div id="contact" style={{ scrollMarginTop: '9rem' }}>
        {' '}
        <Contact />{' '}
      </div>
    </Box>
  );
};

export default Dashboard;
