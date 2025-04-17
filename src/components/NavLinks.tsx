
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active-nav-link" : "nav-link"
        }
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/tournaments"
        className={({ isActive }) =>
          isActive ? "active-nav-link" : "nav-link"
        }
      >
        Tournaments
      </NavLink>
      <NavLink
        to="/games"
        className={({ isActive }) =>
          isActive ? "active-nav-link" : "nav-link"
        }
      >
        Games
      </NavLink>
      <NavLink
        to="/create-tournament"
        className={({ isActive }) =>
          isActive ? "active-nav-link" : "nav-link"
        }
      >
        Create
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? "active-nav-link" : "nav-link"
        }
      >
        Profile
      </NavLink>
    </>
  );
};

export default NavLinks;
