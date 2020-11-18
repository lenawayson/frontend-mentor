import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects'
import ProfileCard from './components/ProfileCard/ProfileCard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/profile-card" component={ProfileCard}>
        </Route>
        <Route path="/" exact component={Projects}> 
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
