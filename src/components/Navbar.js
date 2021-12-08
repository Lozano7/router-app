import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
      </ul>
    </nav>
  );
};

export default Navbar;
