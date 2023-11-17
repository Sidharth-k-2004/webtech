import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './Mini_project/loginpage';
import SignUpPage from './Mini_project/signuppage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUpPage} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </Router>
  );
}
