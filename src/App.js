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
          <ProtectedRoute
            path={process.env.PUBLIC_URL + '/'}
            component={HomeScreen}
            exact
          />
          <Route
            path={process.env.PUBLIC_URL + '/welcome'}
            component={WelcomeScreen}
            exact
          />
          <Route
            path={process.env.PUBLIC_URL + '/login'}
            component={LoginScreen}
            exact
          />
          <Route
            path={process.env.PUBLIC_URL + '/register'}
            component={RegisterScreen}
            exact
          />
          <Route
            path={process.env.PUBLIC_URL + '/about'}
            component={AboutScreen}
            exact
          />
          <Route
            path={process.env.PUBLIC_URL + '/contact'}
            component={ContactScreen}
            exact
          />
          <Route
            path={process.env.PUBLIC_URL + '/faq'}
            component={FaqScreen}
            exact
          />
        </Switch>
      </Router>
    </AuthProvider>
  );
}
