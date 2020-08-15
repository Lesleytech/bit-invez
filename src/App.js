import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './auth/ProtectedRoute';
import { HomeScreen, WelcomeScreen } from './screens';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <ProtectedRoute path='/' component={HomeScreen} exact />
          <Route path='/welcome' component={WelcomeScreen} exact />
        </Switch>
      </Router>
    </AuthProvider>
  );
}
