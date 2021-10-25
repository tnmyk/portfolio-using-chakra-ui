import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

const TimelineEvent = ({ date, body }) => {
  return (
    <Box
      ml="16px"
      position="relative"
      mb="3rem"
      _before={{
        content: `''`,
        bg: useColorModeValue('black', 'white'),
        position: 'absolute',
        top: '0.5rem',
        left: '-17px',
        height: '2px',
        width: '14px',
      }}
    >
      <Heading size="sm">{date}</Heading>
      <Text>{body}</Text>
    </Box>
  );
};

export default TimelineEvent;
