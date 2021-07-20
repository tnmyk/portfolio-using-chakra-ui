import { Box, Heading } from '@chakra-ui/react';
import BlogsContainer from './BlogsContainer';
const Blogs = () => {
  return (
    <Box mt="1.5rem" pb='7rem'>
      <Heading>Blogs</Heading>
      <BlogsContainer limit="1000" />
    </Box>
  );
};

export default Blogs;
