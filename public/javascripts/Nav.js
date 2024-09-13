import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/layouts/Nav.css';

const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              Sobre Shaq
            </NavLink>
          </li>
          <li>
            <NavLink to="/novedades" activeClassName="active">
              Novedades
            </NavLink>
          </li>
          <li>
            <NavLink to="/pre-order" activeClassName="active">
              Pre-Order
            </NavLink>
          </li>
        </ul>
        <div className="logo">
          <img src="https://shaq.com/cdn/shop/files/1200x628_2.jpg?v=1709319475" alt="Shaq Logo" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;