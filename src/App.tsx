import './scss/app.scss';

import React from 'react';
import Header from './sections/Header';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
