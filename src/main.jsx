import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import esTranslation from './assets/languajes/es.json';
import enTranslation from './assets/languajes/en.json';

const resources = {
    en: {
        translation: enTranslation,
    },
    es: {
        translation: esTranslation,
    },
};

i18n.init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
        escapeValue: false,
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <I18nextProvider i18n={i18n}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </I18nextProvider>
    </Router>
);
