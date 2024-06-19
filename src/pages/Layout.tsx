import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";

const Layout = () => {
  const location = useLocation();

  const getBackgroundImage = (pathname: string) => {
    switch (pathname) {
      case "/":
        return "bg-home-mobile";
      case "/destination":
        return "bg-other-mobile";
      case "/crew":
        return "bg-crew-mobile";
      default:
        return "bg-home-mobile";
    }
  };

  const background = getBackgroundImage(location.pathname);

  return (
    <div
      className={`${background} relative z-0 h-screen overflow-x-hidden bg-cover bg-fixed bg-no-repeat`}
    >
      <Navigation />
      <div className="flex flex-col p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
