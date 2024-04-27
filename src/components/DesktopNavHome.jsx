import { useTranslation } from 'react-i18next';
import '../css/layout/_HomePage.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import data from '../assets/data/data.json';
import i18n from 'i18next';

const DesktopNavHome = () => {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleMouseEnter = (category) => {
        setSelectedCategory(category);
    };

    const handleMouseLeave = () => {
        setSelectedCategory('');
    };

    return (
        <nav className='homeNav'>
            <ul>
                <li>
                    <button
                        className='buttonNavHome lastikNavHome'
                        onMouseEnter={() => handleMouseEnter('chemistry')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span>
                            <img
                                id='desktopINNavHome'
                                className='navAddons'
                                src='./logos/in_asterisco.svg'
                                alt=''
                            />
                        </span>
                        <NavLink to='chemistry'>
                            {t('translation.chemistry')}
                        </NavLink>
                    </button>
                    <button
                        className='buttonNavHome satoshiNavHome'
                        onMouseEnter={() => handleMouseEnter('physics')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span className='navAddons'>/</span>
                        <NavLink to='physics'>
                            {t('translation.physics')}
                        </NavLink>
                    </button>
                </li>
                <li id='liNavHome'>
                    <button
                        className='buttonNavHome lastikNavHome'
                        onMouseEnter={() => handleMouseEnter('biology')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span className='navAddons'>{'>'}</span>
                        <NavLink to='biology'>
                            {t('translation.biology')}
                        </NavLink>
                    </button>
                    <button
                        className='buttonNavHome lastikNavHome'
                        onMouseEnter={() => handleMouseEnter('computerScience')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span className='navAddons'>{'–'}</span>
                        <NavLink to='computer-science'>
                            {t('translation.computerScience')}
                        </NavLink>
                    </button>
                </li>

                <li>
                    <button
                        className='buttonNavHome italicNavHome'
                        onMouseEnter={() => handleMouseEnter('mathematics')}
                    >
                        <span className='navAddons'>#</span>
                        <NavLink to='mathematics'>
                            {t('translation.mathematics')}
                        </NavLink>
                    </button>

                    <button
                        className='buttonNavHome lastikNavHome'
                        onMouseEnter={() => handleMouseEnter('medicine')}
                    >
                        <span className='navAddons'>{'<'}</span>
                        <NavLink to='medicine'>
                            {t('translation.medicine')}
                        </NavLink>
                    </button>
                </li>
            </ul>
            {selectedCategory && (
                <img
                    src={data[i18n.language][selectedCategory][0].src}
                    alt={`${selectedCategory}-image`}
                    className='mapImage'
                />
            )}
        </nav>
    );
};

export default DesktopNavHome;
