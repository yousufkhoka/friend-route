
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Friend from './components/Friend/Friend';
import BackButton from './components/BackButton/BackButton';

function App() {
  return (
    
    <Router>
      <BackButton></BackButton>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/friend/:friendId">
          <Friend></Friend>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
       
    </Router>
  );
}

export default App;
