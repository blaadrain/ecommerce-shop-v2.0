import React from 'react';
import { Outlet } from 'react-router';
import Header from '../sections/Header';

const Default: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

export default Default;
