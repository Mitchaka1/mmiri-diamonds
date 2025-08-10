import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// The logo is served from the public folder.  Prefixing with a leading
// slash will resolve it relative to the public directory when the app is
// built.
const logoPath = '/images/logo.png';

/**
 * Navbar renders the site header with the Mmiri Diamonds logo and
 * navigation links. The NavLink component adds an active class
 * automatically when the route matches the current URL.
 */
function Navbar() {
  // Returns a style object based on the active state provided by NavLink.
  const navLinkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    color: isActive ? 'var(--color-primary)' : 'var(--color-secondary)',
    fontWeight: isActive ? '700' : '500',
  });
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link to="/" style={styles.logoWrapper}>
          <img src={logoPath} alt="Mmiri Diamonds logo" style={styles.logo} />
        </Link>
        <nav style={styles.nav}>
          <NavLink to="/" style={navLinkStyle} end>Home</NavLink>
          <NavLink to="/info" style={navLinkStyle}>Water Diamonds</NavLink>
          <NavLink to="/products" style={navLinkStyle}>Shop</NavLink>
          <NavLink to="/custom-design" style={navLinkStyle}>Custom Design</NavLink>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: 'var(--color-bg)',
    borderBottom: '1px solid #e5e5e5',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    padding: '0.5rem 1rem',
    margin: '0 auto',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '40px',
    width: 'auto',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
  },
  // navLink styles are computed in Navbar using navLinkStyle function
};

export default Navbar;
