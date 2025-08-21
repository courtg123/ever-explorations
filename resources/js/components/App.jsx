import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import E1ProjectPage from './E1ProjectPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/e1" element={<E1ProjectPage />} />
        </Routes>
    );
}

export default App;