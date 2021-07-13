import {
  Flex,
  Icon,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai';
const Footer = () => {
  return (
    <Flex
      w={['90%', '60%']}
      mx="auto"
      mt="7rem"
      borderTop="1px"
      borderColor={useColorModeValue('gray.400', 'gray.500')}
      flexDir={['column-reverse', 'row']}
      color={useColorModeValue('gray.600', 'gray.300')}
    >
      <VStack
        spacing="2rem"
        alignItems="start"
        p="3rem"
        pt={['0', '3rem']}
        w={['100%', '50%']}
      >
        <Link to="/">
          Twitter <Icon ml="1px" mb="2px" as={AiOutlineTwitter} />
        </Link>

        <Link to="/">
          Github
          <Icon ml="3px" mb="2px" as={AiOutlineGithub} />{' '}
        </Link>

        <Text>Email: tanmaykachroo@gmail.com</Text>
      </VStack>
      <VStack
        spacing="1rem"
        w={['100%', '50%']}
        alignItems="start"
        justifyContent="center"
        p="3rem"
        pb={['2rem', '3rem']}
      >
        <Link fontSize="lg" to="/">
          Resume 📗
        </Link>
      </VStack>
    </Flex>
  );
};

export default Footer;
