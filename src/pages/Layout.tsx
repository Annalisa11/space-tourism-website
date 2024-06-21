import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import Header from "src/components/Header";

const Layout = () => {
  const location = useLocation();

  const getBackgroundImage = (pathname: string) => {
    switch (pathname) {
      case "/technology":
        return "bg-tech-mobile md:bg-tech-tablet lg:bg-tech-desktop";
      case "/destination":
        return "bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop";
      case "/crew":
        return "bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop";
      default:
        return "bg-home-mobile md:bg-home-tablet lg:bg-home-desktop";
    }
  };

  const background = getBackgroundImage(location.pathname);

  return (
    <div
      className={`${background} relative h-screen overflow-x-hidden bg-cover bg-fixed bg-no-repeat`}
    >
      <Header />
      <div className="flex flex-col p-12 md:pb-24">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
