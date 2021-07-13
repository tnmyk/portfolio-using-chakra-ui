import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
const Project = ({ title, snippet }) => {
  const snippetColor = useColorModeValue('gray.700', 'gray.300');
  const titleColor = useColorModeValue('gray.800', 'gray.200');
  return (
    <Box
      mx="1.5rem"
      my="2rem"
      boxShadow="base"
      p="6"
      borderRadius="lg"
      border="1px"
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      _hover={{
        borderColor: useColorModeValue('gray.300', 'gray.500'),
      }}
    >
      <Text fontWeight="medium" fontSize="1.5rem" color={titleColor}>
        {title}
      </Text>
      <Text ml="0.1rem" color={snippetColor}>
        {snippet}
      </Text>
      <Text>
        <RouterLink
          to={`/projects/${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          <Text
            mt="1rem"
            fontWeight="bold"
            w="max-content"
            textDecor="underline"
          >
            See Details
          </Text>
        </RouterLink>
      </Text>
    </Box>
  );
};

export default Project;
