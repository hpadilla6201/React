import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Timeline from './pages/Timeline';



function App() {
  return (
        <Router>
          <NavBar/>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/aboutme' exact component={AboutMe} />
              <Route path='/projects' exact component={Projects} />
              <Route path='/timeline' exact component={Timeline} />
            </Switch>
        </Router> 
  );
}
export default App;
