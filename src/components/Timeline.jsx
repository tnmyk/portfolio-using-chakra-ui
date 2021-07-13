import {
  Box, Heading
} from '@chakra-ui/react';
import TimelineContainer from './TimelineContainer';

const Timeline = () => {
  return (
    <Box mt="3rem">
      <Heading>What should I add here next?</Heading>
      <TimelineContainer limit="1000" />
    </Box>
  );
};

export default Timeline;
