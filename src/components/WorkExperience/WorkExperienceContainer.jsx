import { Box } from '@chakra-ui/layout';
import WorkExperience from './WorkExperience';
import workExperiences from './workExperiences';
const WorkExperienceContainer = () => {
  return (
    <Box ml="1.5rem" mt="1rem" pt="2rem">
      {workExperiences.map((workExperience, index) => {
        return <WorkExperience key={index} workExperience={workExperience} />;
      })}
    </Box>
  );
};

export default WorkExperienceContainer;
