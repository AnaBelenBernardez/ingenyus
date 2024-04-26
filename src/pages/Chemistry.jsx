import ChemystryMap from '../components/Maps/ChemistryMap';
import '../css/layout/_General.css';
import Loading from '../components/Loading/index.jsx';
import { useEffect, useState } from 'react';

const Chemistry = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showLoading, setShowLoading] = useState(false);

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
    return <ChemystryMap />;
};

export default Chemistry;
