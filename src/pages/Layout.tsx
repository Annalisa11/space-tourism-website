import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/crew">Crew</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          <li>
            <Link to="/technology">Technology</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
