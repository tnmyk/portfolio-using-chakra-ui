import { Box,  Text, useColorModeValue } from "@chakra-ui/react";

const Project = ({title,snippet}) => {
  const snippetColor = useColorModeValue('gray.700', 'white');  
  const titleColor = useColorModeValue('gray.800', 'white');  
  return (
      <Box mx="1.5rem" my="2rem">
        <Text fontWeight='medium' fontSize="1.5rem" color={titleColor}>
          {title}
        </Text>
        <Text ml="0.1rem" color={snippetColor}>
          {snippet}
        </Text>
      </Box>
    );
}
 
export default Project;