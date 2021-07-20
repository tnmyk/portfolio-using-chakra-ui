import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import blogs from '../data/blogs';
import { Link } from 'react-router-dom';
const BlogsContainer = ({ limit }) => {
 
  return (
    <Box ml="1.5rem" mt="0rem" pt="0.1rem">
      {blogs.map((blog, index) => {
        if (index > limit) return '';
        return (
          <>
            <Link
              to={'/blogs/' + blog.title.replace(/\s+/g, '-').toLowerCase()}
            >
              <h1
                style={{
                  fontSize: '1.55rem',
                  fontWeight: '500',
                  marginTop: '1.7rem',
                }}
              >
                {blog.title}{' '}
                <span
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: 'gray',
                    margin: '1rem',
                    verticalAlign: '20%',
                  }}
                >
                  {blog.date}
                </span>
              </h1>
            </Link>
            <p >{blog.snippet}</p>
          </>
        );
      })}
    </Box>
  );
};

export default BlogsContainer;
