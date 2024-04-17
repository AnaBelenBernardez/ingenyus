import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function PageTitle() {
    const location = useLocation();
    const [inactive, setInactive] = useState(false);

    useEffect(() => {
        let timer;

        const resetTimer = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                setInactive(true);
            }, 6000);
        };
        const handleWindowClick = () => {
            setInactive(false);
        };

        window.addEventListener('click', handleWindowClick);

        resetTimer();

        const updatePageTitle = () => {
            const currentPath = window.location.pathname;
            let pageTitle = '';

            if (currentPath === '/') {
                pageTitle = '';
            } else if (currentPath === '/biology') {
                pageTitle = ' | Biología';
            } else if (currentPath === '/physics') {
                pageTitle = ' | Física';
            } else if (currentPath === '/chemistry') {
                pageTitle = ' | Química';
            } else if (currentPath === '/mathematics') {
                pageTitle = ' | Matemáticas';
            } else if (currentPath === '/computer-science') {
                pageTitle = ' | Computación';
            } else if (currentPath === '/medicine') {
                pageTitle = ' | Medicina';
            } else if (currentPath === '*') {
                pageTitle = '';
            }

            const messages = [
                'Miss You 😘',
                "You'll be back 😎",
                '¡Vuelve Wilsooon! 😭',
            ];
            const randomMessage =
                messages[Math.floor(Math.random() * messages.length)];

            if (inactive) {
                document.title = randomMessage;
            } else {
                document.title = 'ingenyus*' + pageTitle;
            }
            resetTimer();
        };

        updatePageTitle();

        return () => {
            clearTimeout(timer);
            window.removeEventListener('click', handleWindowClick);
        };
    }, [location, inactive]);

    return null;
}

export default PageTitle;
