import { Redirect, Route, useLocation } from 'react-router-dom';
import useAuth from '../auth/useAuth';

//const user = { id: 1, name: 'test' };
const PrivateRoutes = ({ component: Component, ...props }) => {
  const location = useLocation();
  const auth = useAuth();
  return (
    <Route {...props}>
      {auth.isLogged() ? (
        <Component />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      )}
    </Route>
  );
};

export default PrivateRoutes;
