import React from 'react';
import HamburgerButton from '../general/Buttons/hamburger/HamburgerButton';
import Portada from './home/portada/Portada';
import Presentacion from './home/presentacion/Presentacion';
import Pensamiento from './home/pensamiento/Pensamiento';

const Home = () => {
  return (
    <>
      <Portada />
      <Presentacion />
      <Pensamiento />
    </>
  );
};

export default Home;