import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <NavLink className='navbar-brand' to='/'>
        Navbar
      </NavLink>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'active nav-link' : 'nav-link'
              }
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'active nav-link' : 'nav-link'
              }
              to='/login'
            >
              Login
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'active nav-link' : 'nav-link'
              }
              to='/about'
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
