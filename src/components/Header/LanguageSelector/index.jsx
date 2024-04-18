import { useState } from 'react';
import './style.css';

function LanguageSelector() {
    const [showLanguages, setShowLanguages] = useState(false);

    const toggleLanguages = () => {
        setShowLanguages(!showLanguages);
    };

    return (
        <>
            <li>
                <ul id='languageSelector' onClick={toggleLanguages}>
                    <li className='buttonNav buttonLang' id='esSelector'>
                        es
                        <div className='triangleDown' />
                    </li>
                    {showLanguages && (
                        <li className='buttonNav buttonLang' id='enSelector'>
                            en
                        </li>
                    )}
                </ul>
            </li>
        </>
    );
}

export default LanguageSelector;
