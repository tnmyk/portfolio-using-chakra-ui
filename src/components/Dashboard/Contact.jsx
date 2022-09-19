import { EmailIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';

import { IoIosContact } from 'react-icons/io';
const Contact = () => {
  return (
    <Box mt="4rem">
      <Heading>Contact me</Heading>
      <Text mx="0.2rem">Let's start building something together</Text>
      <Box width={['100%', '65%']} mt="2rem" ml="1rem">
        <form
          action="https://formsubmit.co/tanmay  @gmail.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table"></input>
          <input
            type="hidden"
            name="_next"
            value="https://tanmay.vercel.app/thank-you"
          ></input>
          <InputGroup my="1rem">
            <InputLeftElement
              pointerEvents="none"
              children={
                <Icon
                  as={IoIosContact}
                  color={useColorModeValue('gray.800', 'white')}
                />
              }
            />
            <Input
              variant="filled"
              type="text"
              name="name"
              placeholder="Your Name"
              w="90%"
              isRequired
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<EmailIcon />} />
            <Input
              variant="filled"
              type="email"
              name="email"
              placeholder="Email"
              isRequired
              w="90%"
              // bgColor="gray.900"
              // _hover={{ bgColor: 'gray.800' }}
            />
          </InputGroup>
          <Textarea
            name="message"
            variant="filled"
            w="90%"
            h="7rem"
            mt="1rem"
            placeholder="Message"
          ></Textarea>
          <br />
          <Button mt="1rem" type="submit">
            Send
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
