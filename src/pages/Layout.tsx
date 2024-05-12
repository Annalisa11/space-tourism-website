import { Link, Outlet } from "react-router-dom";
import MenuIcon from "../assets/img/shared/icon-hamburger.svg";
import LogoIcon from "../assets/img/shared/logo.svg";
import { useState } from "react";
import classNames from "classnames";

type NavEntry = {
  title: string;
  url: string;
};

const Layout = () => {
  const navEntries: NavEntry[] = [
    { title: "Home", url: "/" },
    { title: "Description", url: "/description" },
    { title: "Crew", url: "/crew" },
    { title: "Technology", url: "/technology" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    console.log("menu open", isMenuOpen);
  };

  return (
    <div className="relative h-screen bg-[url('./assets/img/home/background-home-mobile.jpg')] bg-cover bg-no-repeat ">
      <header className="z-1000 flex justify-between p-4">
        <img src={LogoIcon} />
        <img
          src={MenuIcon}
          className="w-12 hover:cursor-pointer"
          onClick={toggleMenu}
        />
      </header>
      <nav
        className={classNames(
          { hidden: isMenuOpen },
          "text-purple-light absolute bottom-0 top-0 z-0 w-full bg-black/70  backdrop-blur-md",
        )}
      >
        <header className="z-1000 flex justify-between p-4">
          <img src={LogoIcon} />
          <img
            src={MenuIcon}
            className="w-12 hover:cursor-pointer"
            onClick={toggleMenu}
          />
        </header>
        <ul className="flex flex-col justify-between  ">
          {navEntries.map(({ title, url }, index) => (
            <li key={index}>
              <Link
                onClick={toggleMenu}
                className="flex justify-center p-8 hover:cursor-pointer"
                to={url}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
