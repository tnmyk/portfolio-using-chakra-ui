import { Button, Flex, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const ThankYou = () => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      mt="6rem"
    >
      <Heading fontSize={['xl', '2xl', '4xl', '5xl']}>
        Your Response has been sent.
      </Heading>
      <Heading fontSize={['md', 'lg', 'lg', 'xl']} my="1rem" mb="2rem">
        I will get to you as soon as possible.
      </Heading>
      <RouterLink to="/">
        <Button> {'<'} Go back to Home</Button>{' '}
      </RouterLink>
    </Flex>
  );
};

export default ThankYou;
