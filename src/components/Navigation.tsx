import classNames from "classnames";
import { Link } from "react-router-dom";
import { useState } from "react";

type Props = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

type NavEntry = {
  title: string;
  url: string;
};

const Navigation = ({ isMenuOpen, toggleMenu }: Props) => {
  const navEntries: NavEntry[] = [
    { title: "Home", url: "/" },
    { title: "Destinations", url: "/destination" },
    { title: "Crew", url: "/crew" },
    { title: "Technology", url: "/technology" },
  ];

  const zeroPad = (num: number, places: number) =>
    String(num).padStart(places, "0");

  return (
    <nav
      className={classNames(
        { hidden: !isMenuOpen },
        "absolute bottom-0 top-0 h-screen w-full rounded-bl-xl rounded-tl-xl bg-black/70 text-purple-light backdrop-blur-md md:static md:flex md:h-full md:w-fit md:bg-white/5 lg:w-full lg:pl-32",
      )}
    >
      <ul className="flex flex-col justify-between md:flex-row md:gap-0 lg:gap-12">
        {navEntries.map(({ title, url }, index) => (
          <li key={index} className="md:flex md:items-center md:justify-center">
            <Link
              onClick={toggleMenu}
              className="flex h-full justify-center p-8 font-body text-lg uppercase tracking-wider text-white md:flex md:items-center md:border-b-4 md:border-transparent md:hover:cursor-pointer md:hover:border-white lg:text-xl"
              to={url}
            >
              <strong className="mr-2 hidden  text-white lg:block">
                {zeroPad(index + 1, 2)}
              </strong>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
