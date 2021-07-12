import { Box, useColorModeValue } from '@chakra-ui/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop'
import Timeline from './components/Timeline';
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Box pb="5rem" pt="7rem" bgColor={useColorModeValue('white', 'black')}>
        <Box width="60%" marginX="auto">
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/timeline" component={Timeline} />
        </Box>
      </Box>
    </Router>
  );
};

export default App;
