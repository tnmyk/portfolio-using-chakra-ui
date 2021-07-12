import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Link, Text, useColorMode } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      zIndex="1000"
      width="100%"
      h="7rem"
      alignItems="center"
      justifyContent="space-between"
      paddingX="10rem"
      position="fixed"
      top="0"
      backdropFilter="blur(15px)"
    >
      <>
        <RouterLink to="/">
          <Text fontSize="xl" fontWeight="medium">
            Tanmay Kachroo
          </Text>
        </RouterLink>
      </>
      <Flex alignItems="center">
        <Link
          as={RouterLink}
          to="/"
          fontSize="md"
          fontWeight="medium"
          mr="2rem"
        >
          Dashboard
        </Link>
        
          <Link to='/timeline' as={RouterLink} fontSize="md" fontWeight="medium" mr="2rem">
            Timeline
          </Link>
        
        
          <Link to='/contact' as={RouterLink} fontSize="md" fontWeight="medium" mr="2rem">
            Contact
          </Link>
        
        <IconButton
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        />
      </Flex>
    </Flex>
  );
};

export default NavBar;
