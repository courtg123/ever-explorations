import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Only scroll to top if there's no hash in the URL
        if (!hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;