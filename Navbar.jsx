import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#282c34', color: '#fff' }}>
      <h2>My Portfolio</h2>
      <div>
        <Link to="/" style={{ color: '#fff', margin: '0 1rem' }}>About</Link>
        <Link to="/projects" style={{ color: '#fff', margin: '0 1rem' }}>Projects</Link>
        <Link to="/certifications" style={{ color: '#fff', margin: '0 1rem' }}>Certifications</Link>
        <Link to="/contact" style={{ color: '#fff', margin: '0 1rem' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
