import { Flex, Heading, Text } from '@chakra-ui/react';

const Error = () => {
  return (
    <Flex alignItems='center' justifyContent='center' height='50vh' flexDir='column'>
      <Heading size="4xl">404</Heading>
      <Text fontSize="sm">Page does not exist</Text>
    </Flex>
  );
};

export default Error;
