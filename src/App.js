import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { HeaderVisitor } from './components';
import routes from './config/routes';
import './App.css';

const isUserAuthenticated = true;

const PrivateRoute = ({ component: Component }) => {
  return (
    <Route
      render={() => {
        if (isUserAuthenticated) {
          return <Component />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

function App() {
  return (
    <Router>
      <HeaderVisitor />
      <Switch>
        {routes.map((route) => {
          if (route.isPublic) {
            return (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
              />
            );
          }
          return (
            <PrivateRoute
              path={route.path}
              component={route.component}
              key={route.path}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
