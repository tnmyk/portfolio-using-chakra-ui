import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Text } from '@chakra-ui/layout';

const WorkExperience = ({ workExperience }) => {
  const snippetColor = useColorModeValue('gray.700', 'gray.300');
  const titleColor = useColorModeValue('gray.800', 'gray.200');
  return (
    <Box border="1px solid gray" px="7" py="6" pb="8" borderRadius="4">
      <Text fontWeight="medium" fontSize="1.4rem" color={titleColor}>
        {workExperience.position}{' '}
      </Text>
      <Text fontSize="1.1rem" ml="1" color={titleColor}>
        <i>{workExperience.companyName}</i>
      </Text>
      <Text
        display="inline"
        verticalAlign="3px"
        fontSize="0.85rem"
        ml="0.1rem"
        color={workExperience.snippetColor}
      >
        ({workExperience.duration})
      </Text>
      <Text ml="0.1rem" mt="3" color={snippetColor}>
        {workExperience.description}
      </Text>
    </Box>
  );
};

export default WorkExperience;
