import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../sections/Footer';
import Header from '../sections/Header';

const Default: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Default;
