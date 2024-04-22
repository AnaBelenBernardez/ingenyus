import Nav from './Nav';
import Home from './Home';
import './style.css';
import BurgerNav from './BurgerNav';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation();
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1200);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header>
            {isDesktop ? <Nav /> : <BurgerNav />}
            <Home className='home' />
        </header>
    );
}

export default Header;
