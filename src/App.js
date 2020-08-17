import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './auth/ProtectedRoute';
import {
  HomeScreen,
  WelcomeScreen,
  LoginScreen,
  RegisterScreen,
  AboutScreen,
  ContactScreen,
  FaqScreen,
} from './screens';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <ProtectedRoute path='/' component={HomeScreen} exact />
          <Route path='/welcome' component={WelcomeScreen} exact />
          <Route path='/login' component={LoginScreen} exact />
          <Route path='/register' component={RegisterScreen} exact />
          <Route path='/about' component={AboutScreen} exact />
          <Route path='/contact' component={ContactScreen} exact />
          <Route path='/faq' component={FaqScreen} exact />
        </Switch>
      </Router>
    </AuthProvider>
  );
}
