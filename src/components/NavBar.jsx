import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Link, Text, useColorMode } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      width="100%"
      h="6rem"
      alignItems="center"
      justifyContent="space-between"
      paddingX="10rem"
    >
      <>
        <RouterLink to="/">
          <Text fontSize="xl" fontWeight="medium">
            Tanmay Kachroo
          </Text>
        </RouterLink>
      </>
      <Flex alignItems="center">
        <RouterLink to="/">
          <Link fontSize="md" fontWeight="medium" mr="2rem">
            Dashboard
          </Link>
        </RouterLink>
        <RouterLink to="/">
          <Link fontSize="md" fontWeight="medium" mr="2rem">
            Timeline
          </Link>
        </RouterLink>
        <RouterLink to="/">
          <Link fontSize="md" fontWeight="medium" mr="2rem">
            Contact
          </Link>
        </RouterLink>
        <IconButton onClick={toggleColorMode} icon={colorMode === 'light' ?<MoonIcon />:<SunIcon/>} />
      </Flex>
    </Flex>
  );
};

export default NavBar;
