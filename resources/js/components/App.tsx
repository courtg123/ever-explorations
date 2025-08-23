import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import E1ProjectPage from './E1ProjectPage';
import ChangelogPage from './ChangelogPage';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import ScrollToTop from './ScrollToTop';

const App: React.FC = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project/e1" element={<E1ProjectPage />} />
                <Route path="/changelog" element={<ChangelogPage />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
            </Routes>
        </>
    );
};

export default App;