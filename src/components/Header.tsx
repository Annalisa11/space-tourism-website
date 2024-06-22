import LogoIcon from "../assets/shared/logo.svg";
import MenuIcon from "../assets/shared/icon-hamburger.svg";
import Navigation from "./Navigation";
import { useState } from "react";
import classNames from "classnames";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    console.log("menu open", isMenuOpen);
  };

  return (
    <>
      <header
        className={classNames(
          {
            "bg-black/70 text-purple-light backdrop-blur-md md:bg-transparent lg:backdrop-blur-none":
              isMenuOpen,
          },
          "relative z-50 flex flex-col md:flex-row lg:mt-16",
        )}
      >
        <div className="flex justify-between p-4">
          <img src={LogoIcon} className="md:w-20" />
          <img
            src={MenuIcon}
            className="h-10 w-10 hover:cursor-pointer md:hidden md:w-20"
            onClick={toggleMenu}
          />
        </div>
        <div className="relative z-50 w-full md:flex md:justify-end ">
          <hr className="z-10 my-auto -mr-24 ml-0 hidden h-[2px] w-7/12 bg-purple-light lg:block" />
          <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </header>
    </>
  );
};

export default Header;
