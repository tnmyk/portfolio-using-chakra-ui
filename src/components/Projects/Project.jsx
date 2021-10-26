import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';
import { AiOutlineGithub } from 'react-icons/ai';

const Project = ({ title, snippet, productUrl, detailPage, github }) => {
  const snippetColor = useColorModeValue('gray.700', 'gray.300');
  const titleColor = useColorModeValue('gray.800', 'gray.200');
  const realTitle = (
    <Text fontWeight="medium" fontSize="1.5rem" color={titleColor}>
      {title}
    </Text>
  );
  return (
    <Box
      mx={['0.5rem', '1.5rem', '1.5rem', '1.5rem']}
      my="2rem"
      boxShadow="base"
      p="6"
      borderRadius="5"
      border="1px"
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      _hover={{
        borderColor: useColorModeValue('gray.300', 'gray.500'),
      }}
    >
      {detailPage ? (
        <RouterLink
          to={`/projects/${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          {realTitle}
        </RouterLink>
      ) : github ? (
        <a target="_blank" rel="noreferrer" href={github}>
          {realTitle}
        </a>
      ) : (
        realTitle
      )}
      <Text ml="0.1rem" color={snippetColor}>
        {snippet}
      </Text>
      <Text mt="1rem">
        {productUrl && (
          <a href={productUrl} target="_blank" rel="noreferrer">
            <span
              style={{
                marginTop: '1rem',
                fontWeight: 'bold',
                textDecoration: 'underline',
              }}
            >
              See Product{' '}
              <FiExternalLink
                style={{ display: 'inline-flex', marginRight: '2.5rem' }}
              />
            </span>
          </a>
        )}

        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            <span
              style={{
                marginTop: '1rem',
                fontWeight: 'bold',
                textDecoration: 'underline',
              }}
            >
              Github{' '}
              <AiOutlineGithub
                style={{
                  display: 'inline-flex',
                  marginRight: '2.5rem',
                  verticalAlign: '-2px',
                }}
              />
            </span>
          </a>
        )}
        {detailPage && (
          <RouterLink
            to={`/projects/${title.replace(/\s+/g, '-').toLowerCase()}`}
          >
            <span
              style={{
                marginTop: '1rem',
                fontWeight: 'bold',
                textDecoration: 'underline',
              }}
            >
              See Details
            </span>
          </RouterLink>
        )}
      </Text>
    </Box>
  );
};

export default Project;
