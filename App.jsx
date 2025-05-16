// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ModularKitchens from './ModularKitchens';
import Wardrobes from './Wardrobes';
// Import other components accordingly

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/modular-kitchens" element={<ModularKitchens />} />
        <Route path="/wardrobes" element={<Wardrobes />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
