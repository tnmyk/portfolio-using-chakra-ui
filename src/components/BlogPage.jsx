import { Box, Heading, Text } from '@chakra-ui/react';
import { useParams, Link } from 'react-router-dom';
import blogs from '../data/blogs';
import Error from './Error';

const BlogPage = () => {
  const { blog } = useParams();

  const data = blogs.filter(
    blogSnap => blog === blogSnap.title.replace(/\s+/g, '-').toLowerCase()
  )[0];

  if (!data) return <Error />;

  return (
    <Box mt="3rem">
      <Heading>{data.title}</Heading>
      <Text fontSize="sm">Created At: {data.date}</Text>
      <Text mb='4rem' fontSize="1.3rem" mt="2rem" whiteSpace="pre-line">
        {data.body}
      </Text>
      <Link to="/blogs">
        {' '}
        <p style={{ textDecoration: 'underline' }}>Read more blogs</p>
      </Link>
    </Box>
  );
};

export default BlogPage;
