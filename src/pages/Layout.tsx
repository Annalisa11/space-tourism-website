import { Link, Outlet } from "react-router-dom";
import MenuIcon from "../starter-code/assets/shared/icon-hamburger.svg";
import LogoIcon from "../starter-code/assets/shared/logo.svg";
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
    <div className="relative h-screen bg-blue-950">
      <div
        className={classNames(" absolute bottom-0 top-0 w-screen  ", {
          "backdrop-blur-sm": !isMenuOpen,
        })}
      >
        <div className="flex w-full justify-between  p-4 ">
          <img src={LogoIcon} />
          <img
            src={MenuIcon}
            className="w-12 hover:cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <nav
          className={classNames(
            { hidden: isMenuOpen },
            "text-purple-light w-full  ",
          )}
        >
          <ul className="flex flex-col justify-between  p-12 ">
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
      </div>

      <Outlet />
    </div>
  );
};

export default Layout;
