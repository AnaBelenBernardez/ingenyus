import ChemistryMap from '../components/Maps/ChemistryMap';
import '../css/layout/_General.css';
import '../css/layout/_Maps.css';
import '../css/base/_backgrounds.css';
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

        fetch('src/assets/data/data.json')
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
        <main className='mainMap blurBack'>
            <ChemistryMap />
            <div className='ellipseWhiteMap' id='e22'></div>
            <div className='ellipseWhiteMap' id='e18'></div>
            <div className='ellipseWhiteMap' id='e23'></div>
            <div className='ellipseWhiteMap' id='e19'></div>
            <div className='ellipseWhiteMap' id='e12'></div>
            <div className='ellipseWhiteMap' id='e14'></div>
            <div className='ellipseWhiteMap' id='e21'></div>
            <div className='ellipseWhiteMap' id='e15'></div>
            <div className='ellipseBlueMap' id='e24'></div>
            <div className='ellipseBlueMap' id='e25'></div>
            <div className='ellipseBlueMap' id='e13'></div>
            <div className='ellipseBlueMap' id='e20'></div>
            <div className='ellipseBlueMap' id='e17'></div>
            <div className='ellipseBlueMap' id='e16'></div>
            {isDesktop ? <DesktopNavHome /> : <MobileNavHome />}
            <BodyAddons />
        </main>
    );
};

export default Chemistry;
