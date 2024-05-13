import { useState } from 'react';
import i18n from 'i18next';
import './style.css';

function LanguageSelector() {
    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const [showLanguages, setShowLanguages] = useState(false);

    const toggleLanguages = () => {
        setShowLanguages(!showLanguages);
    };

    return (
        <>
            <div className='languageSelector'>
                <li>
                    <ul
                        id='languageSelector'
                        onClick={toggleLanguages}
                        aria-expanded={showLanguages}
                    >
                        <li
                            className={`buttonNav buttonLang language ${i18n.language === 'es' ? 'active' : ''}`}
                            onClick={() => handleChangeLanguage('es')}
                            id='esSelector'
                        >
                            es
                            <div className='triangleDown' />
                        </li>
                        {showLanguages && (
                            <li
                                className={`buttonNav buttonLang language ${i18n.language === 'es' ? 'active' : ''}`}
                                onClick={() => handleChangeLanguage('en')}
                                id='enSelector'
                            >
                                en
                            </li>
                        )}
                    </ul>
                </li>
            </div>
        </>
    );
}

export default LanguageSelector;
