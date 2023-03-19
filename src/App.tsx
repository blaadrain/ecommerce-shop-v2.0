import './scss/app.scss';

import React from 'react';
import { Routes, Route } from 'react-router';
import Default from './layouts/Default';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Default />}
      >
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
        <Route
          path="/*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
};

export default App;
