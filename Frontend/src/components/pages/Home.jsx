import React from 'react';
import HamburgerButton from '../general/Buttons/hamburger/HamburgerButton';
import Portada from './home/portada/Portada';
import Presentacion from './home/presentacion/Presentacion';

const Home = () => {
  return (
    <>
      <Portada />
      <Presentacion />
    </>
  );
};

export default Home;