import { NavLink, Outlet } from "react-router-dom";


export function PublicLayout() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-shell">
          <NavLink className="brand" to="/">
            MAHS
          </NavLink>
          <nav className="site-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/academics">Academics</NavLink>
            <NavLink to="/announcements">Announcements</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>MAHS</h3>
            <p>A modern school platform for communication, information, and community.</p>
          </div>
          <div>
            <h4>Modules</h4>
            <ul>
              <li>Announcements</li>
              <li>Events</li>
              <li>Academics</li>
            </ul>
          </div>
          <div>
            <h4>Phase 1</h4>
            <ul>
              <li>Public site</li>
              <li>Django admin</li>
              <li>REST APIs</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
