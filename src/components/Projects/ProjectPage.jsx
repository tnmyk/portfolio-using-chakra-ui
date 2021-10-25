import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, HStack, Icon, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import { AiOutlineGithub } from 'react-icons/ai';
import Error from '../Error';
const ProjectPage = () => {
  const { project } = useParams();
  const data = projectsData[project];
  if (!data) return <Error />;
  return (
    <Box mt="3rem">
      <Heading>{data.name}</Heading>
      <Text fontSize="sm">Created At: {data.date}</Text>
      <Text mt="2rem">{data.body}</Text>
      <HStack mt="4rem" spacing="10px">
        {data.productUrl && (
          <a href={data.productUrl} target="_blank" rel="noreferrer">
            <Button>
              Check the product <ExternalLinkIcon mx="4px" />
            </Button>
          </a>
        )}
        {data.githubUrl && (
          <a href={data.githubUrl} target="_blank" rel="noreferrer">
            <Button>
              {' '}
              <Icon as={AiOutlineGithub} mx="4px" />
              Github <ExternalLinkIcon mx="4px" />
            </Button>
          </a>
        )}
      </HStack>
      <Link to="/projects">
        <p style={{ textDecoration: 'underline' ,marginTop:'3rem'}}>Checkout more projects</p>
      </Link>
    </Box>
  );
};

export default ProjectPage;
