import { Box, useColorModeValue } from '@chakra-ui/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
const App = () => {
  return (
    <Router>
      <NavBar />
      <Box pt='7rem' bgColor={useColorModeValue('white','black')}>
        <Route exact path="/" component={Dashboard} />
      </Box>
    </Router>
  );
};

export default App;
