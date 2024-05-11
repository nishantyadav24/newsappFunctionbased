import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Home from './components/Home'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} /> {/* Define the Home route */}
          <Route exact path="/general" element={<News pageSize={20} country="in" category="general" />} />
          <Route exact path="/business" element={<News pageSize={20} country="in" category="business" />} />
          <Route exact path="/health" element={<News pageSize={20} country="in" category="health" />} />
          <Route exact path="/science" element={<News pageSize={20} country="in" category="science" />} />
          <Route exact path="/entertainment" element={<News pageSize={20} country="in" category="entertainment" />} />
          <Route exact path="/sports" element={<News pageSize={20} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News pageSize={20} country="in" category="technology" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
