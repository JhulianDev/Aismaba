import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../general/header/Header';

const HeaderTemplate = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default HeaderTemplate;