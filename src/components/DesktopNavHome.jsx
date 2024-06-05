import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import data from '../../public/data.json';
import i18n from 'i18next';
import '../assets/styles/HomePage.css';

const Cursor = ({ image }) => {
    return (
        <div className='cursor'>
            {image && <img src={image} alt='cursorImage' />}
        </div>
    );
};

const DesktopNavHome = () => {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [cursorImage, setCursorImage] = useState(null);

    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        const cursorImageElement = document.createElement('img');
        cursor.appendChild(cursorImageElement);

        const cursorControl = (e) => {
            cursor.style.top = `${e.clientY}px`;
            cursor.style.left = `${e.clientX}px`;
        };

        document.addEventListener('mousemove', cursorControl);

        return () => {
            document.removeEventListener('mousemove', cursorControl);
            cursor.removeChild(cursorImageElement);
        };
    }, []);

    const handleMouseEnter = (category) => {
        setSelectedCategory(category);
        const images = data[i18n.language][category];
        const randomIndex = Math.floor(Math.random() * images.length);
        setCursorImage(images[randomIndex].src);
    };

    const handleMouseLeave = () => {
        setSelectedCategory('');
        setCursorImage(null);
    };

    const goToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <nav className='homeNav'>
                <ul>
                    <li id='liCheNav'>
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
                            <NavLink
                                to='/chemistry'
                                aria-label={t('translation.chemistry')}
                                onClick={goToTop}
                            >
                                {t('translation.chemistry')}
                            </NavLink>
                        </button>
                        <button
                            className='buttonNavHome satoshiNavHome'
                            onMouseEnter={() => handleMouseEnter('physics')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className='navAddons'>/</span>
                            <NavLink
                                to='/physics'
                                aria-label={t('translation.physics')}
                                onClick={goToTop}
                            >
                                {t('translation.physics')}
                            </NavLink>
                        </button>
                    </li>
                    <li id='liBioNav'>
                        <button
                            className='buttonNavHome lastikNavHome'
                            onMouseEnter={() => handleMouseEnter('biology')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className='navAddons'>{'>'}</span>
                            <NavLink
                                to='/biology'
                                aria-label={t('translation.biology')}
                                onClick={goToTop}
                            >
                                {t('translation.biology')}
                            </NavLink>
                        </button>
                        <button
                            className='buttonNavHome lastikNavHome'
                            onMouseEnter={() =>
                                handleMouseEnter('computerScience')
                            }
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className='navAddons'>{'–'}</span>
                            <NavLink
                                to='/computer-science'
                                aria-label={t('translation.computerScience')}
                                onClick={goToTop}
                            >
                                {t('translation.computerScience')}
                            </NavLink>
                        </button>
                    </li>

                    <li id='liMathNav'>
                        <button
                            className='buttonNavHome italicNavHome'
                            onMouseEnter={() => handleMouseEnter('mathematics')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className='navAddons'>#</span>
                            <NavLink
                                to='/mathematics'
                                aria-label={t('translation.mathematics')}
                                onClick={goToTop}
                            >
                                {t('translation.mathematics')}
                            </NavLink>
                        </button>

                        <button
                            className='buttonNavHome lastikNavHome'
                            onMouseEnter={() => handleMouseEnter('medicine')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className='navAddons'>{'<'}</span>
                            <NavLink
                                to='/medicine'
                                aria-label={t('translation.medicine')}
                                onClick={goToTop}
                            >
                                {t('translation.medicine')}
                            </NavLink>
                        </button>
                    </li>
                </ul>
            </nav>
            <Cursor image={cursorImage} />
        </>
    );
};

export default DesktopNavHome;
