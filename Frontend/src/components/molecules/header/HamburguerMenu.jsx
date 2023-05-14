import React from 'react';

const HamburguerMenu = () => {
  return (
    <div className="header__container-hamburger">
      <button className="hamburger hamburger--spin">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  );
};

export default HamburguerMenu;