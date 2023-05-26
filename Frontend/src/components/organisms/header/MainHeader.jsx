import { useEffect } from "react";
import LogoLink from "../../molecules/header/LogoLink";
import MainMenu from "../../molecules/header/MainMenu";
import HamburguerMenu from "../../molecules/header/HamburguerMenu";
import CartLink from "../../molecules/header/CartLink";

const MainHeader = () => {

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".header__menu");

    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("is-active");
      menu.classList.toggle("header__menu--activo");
    });

  }, [])

  return (
    <div className="header header--color">
      <LogoLink />
      <HamburguerMenu />
      <MainMenu />
      <CartLink />
    </div>
  );
};

export default MainHeader;