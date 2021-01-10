import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Error from './pages/Error';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
       <Route path="/" exact={true}>
          <Dashboard></Dashboard>
       </Route>
       <Route path="/login">
         <Login/>
       </Route>
       <Route path="*">
         <Error></Error>
       </Route>
       </Switch>
    </Router>
  );
}

export default App;
