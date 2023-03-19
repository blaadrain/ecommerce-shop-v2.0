import './scss/app.scss';

import React from 'react';
import { Routes, Route } from 'react-router';
import Default from './layouts/Default';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Default />}
      >
        <Route
          path=""
          element={<HomePage />}
        />
        <Route
          path="*"
          element={<></>}
        />
      </Route>
    </Routes>
  );
};

export default App;
