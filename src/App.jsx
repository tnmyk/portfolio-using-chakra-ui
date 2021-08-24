import { Box, useColorModeValue } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ProjectPage from './components/ProjectPage';
import ScrollToTop from './components/ScrollToTop';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import ThankYou from './components/ThankYou';
// import Blogs from './components/Blogs';
// import BlogPage from './componen ts/BlogPage';
const App = () => {
  return (
    <Router>
      <NavBar />

      <Box minH="100vh" pt="7rem" bgColor={useColorModeValue('white', 'black')}>
        <Box width={['80%', '70%', '60%']} marginX="auto" minH="40vh">
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/timeline" component={Timeline} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/:project" component={ProjectPage} />
            <Route exact path="/thank-you" component={ThankYou} />
            {/* <Route exact path="/blogs" component={Blogs} /> */}
            {/* <Route exact path="/blogs/:blog" component={BlogPage} /> */}
            <Route exact path="*" component={Error} />
          </Switch>
        </Box>

        <Footer />
      </Box>
    </Router>
  );
};

export default App;
