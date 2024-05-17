import Nav from './Nav';
import './style.css';
import BurgerNav from './BurgerNav';
import { useState, useEffect } from 'react';
import Home from './Home';

function Header() {
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
        <header role='banner' aria-label='Header'>
            {isDesktop ? <Nav /> : <BurgerNav />}
            <Home className='homeHeader' />
        </header>
    );
}

export default Header;
