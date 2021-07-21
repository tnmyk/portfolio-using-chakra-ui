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
      <Text mb="4rem" fontSize="1.1rem" mt="2rem" whiteSpace="pre-line">
        {data.body}
        <Box width={["90%","80%",'70%','60%']} mx='auto' my='1rem'>
          {data.imageUrl && <img src={data.imageUrl} alt="" width="100%" />}
        </Box>
      </Text>
      <Link to="/blogs">
        {' '}
        <p style={{ textDecoration: 'underline' }}>Read more blogs</p>
      </Link>
    </Box>
  );
};

export default BlogPage;
