import { NavLink } from 'react-router-dom';
import useAuth from '../auth/useAuth';

const Navbar = () => {
  const auth = useAuth();
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to='/' activeClassName='activeLink'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/about' activeClassName='activeLink'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/contact' activeClassName='activeLink'>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to='/categories' activeClassName='activeLink'>
            Categories
          </NavLink>
        </li>
        {auth.isLogged() || (
          <li>
            <NavLink exact to='/login' activeClassName='activeLink'>
              Login
            </NavLink>
          </li>
        )}
        {auth.isLogged() || (
          <li>
            <NavLink exact to='/register' activeClassName='activeLink'>
              Register
            </NavLink>
          </li>
        )}
        {auth.isLogged() && (
          <li>
            <NavLink exact to='/payment' activeClassName='activeLink'>
              Payment
            </NavLink>
          </li>
        )}
        {auth.isLogged() && (
          <li>
            <NavLink exact to='/dashboard' activeClassName='activeLink'>
              Dashboard
            </NavLink>
          </li>
        )}
        {auth.isLogged() && (
          <li>
            <button onClick={auth.logout}>Signout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
