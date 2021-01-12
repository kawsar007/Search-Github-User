import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Error from './pages/Error';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './pages/PrivateRoute';
import AuthWrapper from './pages/AuthWrapper';

function App() {
  return (
    <AuthWrapper>
    <Router>
      <Switch>
       <PrivateRoute path="/" exact={true}>
          <Dashboard></Dashboard>
       </PrivateRoute>
       <Route path="/login">
         <Login></Login>
       </Route>
       <Route path="*">
         <Error></Error>
       </Route>
       </Switch>
    </Router>
    </AuthWrapper>
  );
}

export default App;
