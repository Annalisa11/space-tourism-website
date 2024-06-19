import classNames from "classnames";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";

type Props = {};

type NavEntry = {
  title: string;
  url: string;
};

const Navigation = ({}: Props) => {
  const navEntries: NavEntry[] = [
    { title: "Home", url: "/" },
    { title: "Destinations", url: "/destination" },
    { title: "Crew", url: "/crew" },
    { title: "Technology", url: "/technology" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    console.log("menu open", isMenuOpen);
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <nav
        className={classNames(
          { hidden: isMenuOpen },
          "absolute bottom-0 top-0 z-50 w-full bg-black/70 text-purple-light backdrop-blur-md",
        )}
      >
        <Header toggleMenu={toggleMenu} />
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
    </>
  );
};

export default Navigation;
