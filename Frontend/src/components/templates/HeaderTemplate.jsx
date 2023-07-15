import React from 'react';
import { Outlet } from 'react-router-dom';

const HeaderTemplate = () => {
  return (
    <div>
      <h1>HEADER</h1>
      <Outlet />
    </div>
  );
};

export default HeaderTemplate;