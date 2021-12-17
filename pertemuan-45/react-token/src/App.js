import './App.css';
import { Switch, Route } from 'react-router-dom';
import User from './components/User';
import Nav from './components/Nav';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Nav />

      <Switch>
        <Route exact path="/">
          <User />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
