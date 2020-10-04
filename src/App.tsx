/* eslint-disable react/jsx-props-no-spreading */
import { Spinner } from '@chakra-ui/core';
import React, { ComponentType, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';
import NavBar from './components/navbar';
import UnAuthNav from './components/UnAuthNav';
import { AuthProvider, useAuth } from './contexts/Auth';

function createLazyRoute<T extends RouteComponentProps<any>>(
  RouteComponent: React.ComponentType<T>,
) {
  return function LazyComponent(props: T) {
    return (
      <React.Suspense fallback={<Spinner />}>
        <RouteComponent {...props} />
      </React.Suspense>
    );
  };
}
const Home = createLazyRoute(lazy(() => import('./layouts/home')));

const routes: Array<{
  path: string;
  component: ComponentType<any>;
  exact?: boolean;
}> = [{ path: '/', component: Home, exact: true }];

const App: React.FC = () => (
  <AuthProvider>
    <Router>
      <NavBarComponent />
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact || false}
          />
        ))}
      </Switch>
    </Router>
  </AuthProvider>
);

const NavBarComponent = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <NavBar />;
  }
  return <UnAuthNav />;
};

export default App;
