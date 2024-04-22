import React from 'react';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
const Home = () => {
    const { t } = useTranslation();
    return (
        <main>
            <h1>{t('translation.title')}</h1>
            <span>{'#>/<>'}</span>
        </main>
    );
};

export default Home;
