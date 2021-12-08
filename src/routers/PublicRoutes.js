import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../auth/useAuth';

const PublicRoutes = ({ component: Component, ...props }) => {
  const auth = useAuth();
  return (
    <Route {...props}>
      {!auth.isLogged() ? <Component /> : <Redirect to='/' />}
    </Route>
  );
};

export default PublicRoutes;
