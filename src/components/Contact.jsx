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
    <Box mt="4rem" >
      <Heading>Contact me</Heading>
      <Text mx="0.2rem">Let's start building something together</Text>
      <Box width='max-content'  ml='1rem'>
      <form
        action="https://formsubmit.co/tanmaykachroo@gmail.com"
        method="POST"
      >
        <input type="hidden" name="_template" value="table"></input>
        <input
          type="hidden"
          name="_next"
          value="http://localhost:3000/"
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
            w="md"
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
            w="md"
          />
        </InputGroup>
        <Textarea
          name="message"
          variant="filled"
          w="md"
          h='7rem'
          mt="1rem"
          placeholder="Message"
        ></Textarea>{' '}
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
