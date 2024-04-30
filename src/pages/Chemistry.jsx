import ChemistryMap from '../components/Maps/ChemistryMap';
import '../css/layout/_General.css';
import '../css/layout/_Maps.css';
import Loading from '../components/Loading/index.jsx';
import { useEffect, useState } from 'react';
import DesktopNavHome from '../components/DesktopNavHome.jsx';
import MobileNavHome from '../components/MobileNavHome.jsx';
import BodyAddons from '../components/BodyAddons.jsx';

const Chemistry = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showLoading, setShowLoading] = useState(false);
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

    useEffect(() => {
        let showLoadingTimeout = setTimeout(() => {
            setShowLoading(true);
        }, 100);

        fetch('../assets/data/data.json')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                clearTimeout(showLoadingTimeout);
                setIsLoading(false);
                setShowLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setIsLoading(false);
                setShowLoading(false);
            });

        return () => {
            clearTimeout(showLoadingTimeout);
        };
    }, []);

    if (isLoading && showLoading) {
        return <Loading />;
    }
    return (
        <main className='noise mainMap'>
            <ChemistryMap />;
            {isDesktop ? <DesktopNavHome /> : <MobileNavHome />}
            <BodyAddons />
        </main>
    );
};

export default Chemistry;
