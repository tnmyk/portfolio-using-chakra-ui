import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import {BiMenuAltRight} from 'react-icons/bi'
import { Link as RouterLink } from 'react-router-dom';
const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navLinks = (
    <>
      <Link
        onClick={onClose}
        as={RouterLink}
        to="/"
        fontSize={['2rem', '3rem', '2rem', 'md']}
        fontWeight="medium"
        mr="2rem"
      >
        Dashboard
      </Link>

      <Link
        onClick={onClose}
        to="/timeline"
        as={RouterLink}
        fontSize={['2rem', '3rem', '2rem', 'md']}
        fontWeight="medium"
        mr="2rem"
      >
        Timeline
      </Link>

      <Link
        onClick={onClose}
        to="/#contact"
        as={RouterLink}
        fontSize={['2rem', '3rem', '2rem', 'md']}
        fontWeight="medium"
        mr="2rem"
      >
        Contact
      </Link>
    </>
  );

  return (
    <Flex
      zIndex="1000"
      width="100%"
      h="7rem"
      alignItems="center"
      justifyContent="space-between"
      paddingX={['2rem', '2rem', '8rem', '10rem']}
      position="fixed"
      top="0"
      bgColor={useColorModeValue('whiteAlpha.700', 'blackAlpha.700')}
      backdropFilter="blur(15px) opacity(100%)"
    >
      <>
        <RouterLink to="/">
          <Text fontSize="xl" fontWeight="medium">
            Tanmay Kachroo
          </Text>
        </RouterLink>
      </>
      <Flex alignItems="center" display={['none', 'none', 'none', 'flex']}>
        {navLinks}{' '}
        <IconButton
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        />
      </Flex>
      <IconButton
      icon={<BiMenuAltRight/>}
        onClick={onOpen}
        display={['flex', 'flex', 'flex', 'none']}
      ></IconButton>
      <Drawer
        display={['flex', 'flex', 'flex', 'none']}
        placement={'left'}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Navigate</DrawerHeader>
          <DrawerBody>
            <VStack
              h="100%"
              py="6rem"
              justifyContent="space-evenly"
              alignItems="start"
            >
              {navLinks}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default NavBar;
