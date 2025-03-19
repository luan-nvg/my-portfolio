import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './Portfolio'; // O componente de portfólio com os cards
import ProjectPage from './pages/ProjectPage'; // Página do projeto

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} /> {/* Página principal com os projetos */}
        <Route path="/project/:id" element={<ProjectPage />} /> {/* Rota para página de projeto individual */}
      </Routes>
    </Router>
  );
};

export default App;
