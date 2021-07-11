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
import HCaptcha from '@hcaptcha/react-hcaptcha';

import {IoIosContact} from 'react-icons/io'
const Contact = () => {
  const onVerifyCaptcha =()=>{
      
  }
    return (
    <Box mt="4rem">
      <Heading>Contact me</Heading>
      <Text mx="0.2rem">Let's start building something together</Text>
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
            w="20rem"
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
            width="20rem"
          />
        </InputGroup>
        <Textarea
          name="message"
          variant="filled"
          w="20rem"
          mt="1rem"
          placeholder="Message"
        ></Textarea>{' '}
        <br />
        <HCaptcha
          sitekey="783794fa-137e-4267-b64a-1e9ba336c2ad"
          onVerify={onVerifyCaptcha}
        />
        <Button mt="1rem" type="submit">
          Send
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
