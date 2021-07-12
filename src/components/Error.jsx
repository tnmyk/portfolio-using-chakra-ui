import { Box, Heading, Text } from '@chakra-ui/react';

const Error = () => {
  return (
    <Box
      position="absolute"
      transform="auto"
      top="50%"
      left="50%"
      translateX="-50%"
      translateY="-50%"
    >
      <Heading size="4xl">404</Heading>
      <Text fontSize='sm'>Page does not exist</Text>
    </Box>
  );
};

export default Error;
