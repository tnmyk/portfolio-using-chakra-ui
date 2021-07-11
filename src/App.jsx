import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
const App = () => {
  return (
    <Router>
      <NavBar />
      <Route exact path='/' component={Dashboard}/>
    </Router>
  );
};

export default App;
