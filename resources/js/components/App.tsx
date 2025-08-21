import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import E1ProjectPage from './E1ProjectPage';
import ChangelogPage from './ChangelogPage';
import ScrollToTop from './ScrollToTop';

const App: React.FC = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project/e1" element={<E1ProjectPage />} />
                <Route path="/changelog" element={<ChangelogPage />} />
            </Routes>
        </>
    );
};

export default App;