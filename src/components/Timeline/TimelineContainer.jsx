import { Box, useColorModeValue } from "@chakra-ui/react";
import { timeline } from "../../data/timeline";
import TimelineEvent from "./TimelineEvent";

const TimelineContainer = ({limit}) => {
    return (
      <Box
        ml="1.5rem"
        mt="2rem"
        pt='2rem'
        borderLeftWidth="3px"
        borderColor={useColorModeValue('black', 'white')}
      >
        {timeline.map((event, index) => {
          if (index > limit) return '';
          return (
            <TimelineEvent
              date={event.date}
              body={event.body}
              key={Math.random()}
            />
          );
        })}
      </Box>
    );
}
 
export default TimelineContainer;