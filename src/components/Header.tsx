import MenuIcon from "../assets/shared/icon-hamburger.svg";
import LogoIcon from "../assets/shared/logo.svg";

type Props = {
  toggleMenu: () => void;
};

const Header = ({ toggleMenu }: Props) => {
  return (
    <header className="z-1000 flex justify-between p-4">
      <img src={LogoIcon} />
      <img
        src={MenuIcon}
        className="w-12 hover:cursor-pointer"
        onClick={toggleMenu}
      />
    </header>
  );
};

export default Header;
