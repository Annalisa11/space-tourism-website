import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";

const Layout = () => {
  const location = useLocation();

  const background =
    location.pathname === "/" ? "bg-home-mobile" : "bg-other-mobile";

  return (
    <div
      className={`${background} relative z-0 h-screen overflow-x-hidden bg-cover bg-fixed bg-no-repeat`}
    >
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
