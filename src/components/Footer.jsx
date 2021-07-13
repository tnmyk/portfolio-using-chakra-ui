import {
  Button,
  Flex,
  Icon,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai';
const Footer = () => {
  return (
    <Flex
      w="60%"
      mx="auto"
      mt="7rem"
      borderTop="1px"
      borderColor={useColorModeValue('gray.400', 'gray.500')}
      flexDir={['column-reverse', 'row']}
    >
      <VStack spacing="2rem" alignItems="start" p="3rem" pt={['0','3rem']} w={['100%', '50%']}>
        <Button>
          <Link to="/">
            Twitter <Icon ml="1px" mb="2px" as={AiOutlineTwitter} />
          </Link>
        </Button>
        <Button>
          <Link to="/">
            Github
            <Icon ml="3px" mb="2px" as={AiOutlineGithub} />{' '}
          </Link>
        </Button>
        <Text>Email: tanmaykachroo@gmail.com</Text>
      </VStack>
      <VStack
        spacing="1rem"
        w={['100%', '50%']}
        alignItems="start"
        justifyContent="center"
        p="3rem"
      >
        <Button>
          <Link fontSize="lg" to="/">
            Resume 📗
          </Link>
        </Button>
      </VStack>
    </Flex>
  );
};

export default Footer;
