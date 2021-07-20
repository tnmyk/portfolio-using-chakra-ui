import { Flex, Icon, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
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
        <a
          href="https://www.linkedin.com/in/tanmay-kachroo-0abbb91b7/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <Icon ml="1px" mb="2px" as={FaLinkedin} />
        </a>
        <a href="https://github.com/tnmyk" target="_blank" rel="noreferrer">
          Github
          <Icon ml="3px" mb="2px" as={AiOutlineGithub} />{' '}
        </a>

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
        <a href="/tanmay-kachroo-resume.pdf" target="_blank" rel="noreferrer">
          My Resume 📗
        </a>
      </VStack>
    </Flex>
  );
};

export default Footer;
