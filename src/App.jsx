import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importe suas páginas
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contato from './pages/Contato';
import SearchResults from './pages/SearchResults';

import './styles/global.css';
import './styles/components.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;