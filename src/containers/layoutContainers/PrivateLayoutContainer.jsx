import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivateLayoutContainer = () => {
  return (
    <>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default PrivateLayoutContainer;
