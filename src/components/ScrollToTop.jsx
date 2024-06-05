import { useState, useEffect } from 'react';
import '../assets/styles/General.css';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            setIsVisible(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            title='Volver arriba'
            aria-label='Volver arriba'
            className={`scroll-to-top ${isVisible ? 'show' : 'hide'}`}
            onClick={scrollToTop}
        >
            <svg
                width='14'
                height='9'
                viewBox='0 0 14 9'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
            >
                <path
                    d='M6.6678 8.14006L0.0512695 1.52353L0.699949 0.874847L6.6678 6.8427L12.6357 0.874847L13.2843 1.52353L6.6678 8.14006Z'
                    fill='var(--athens)'
                    className='arrow-icon'
                />
            </svg>
        </button>
    );
}

export default ScrollToTop;
