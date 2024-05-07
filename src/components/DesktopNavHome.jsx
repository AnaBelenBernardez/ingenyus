/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import data from '../assets/data/data.json';
import i18n from 'i18next';
import '../css/layout/_HomePage.css';

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

    return (
        <>
            <nav className='homeNav'>
                <ul>
                    <li id='liCheNav'>
                        <button
                            className='buttonNavHome lastikNavHome'
                            onMouseEnter={() =>
                                handleMouseEnter(
                                    'chemistry',
                                    data[i18n.language]['chemistry'][0].src
                                )
                            }
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
                            <NavLink to='/chemistry'>
                                {t('translation.chemistry')}
                            </NavLink>
                        </button>
                        <button
                            className='buttonNavHome satoshiNavHome'
                            onMouseEnter={() =>
                                handleMouseEnter(
                                    'physics',
                                    data[i18n.language]['physics'][0].src
                                )
                            }
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className='navAddons'>/</span>
                            <NavLink to='/physics'>
                                {t('translation.physics')}
                            </NavLink>
                        </button>
                    </li>
                    <li id='liBioNav'>
                        <button
                            className='buttonNavHome lastikNavHome'
                            onMouseEnter={() =>
                                handleMouseEnter(
                                    'biology',
                                    data[i18n.language]['biology'][0].src
                                )
                            }
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className='navAddons'>{'>'}</span>
                            <NavLink to='/biology'>
                                {t('translation.biology')}
                            </NavLink>
                        </button>
                        <button
                            className='buttonNavHome lastikNavHome'
                            onMouseEnter={() =>
                                handleMouseEnter(
                                    'computerScience',
                                    data[i18n.language]['computerScience'][0]
                                        .src
                                )
                            }
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className='navAddons'>{'–'}</span>
                            <NavLink to='/computer-science'>
                                {t('translation.computerScience')}
                            </NavLink>
                        </button>
                    </li>

                    <li id='liMathNav'>
                        <button
                            className='buttonNavHome italicNavHome'
                            onMouseEnter={() =>
                                handleMouseEnter(
                                    'mathematics',
                                    data[i18n.language]['mathematics'][0].src
                                )
                            }
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className='navAddons'>#</span>
                            <NavLink to='/mathematics'>
                                {t('translation.mathematics')}
                            </NavLink>
                        </button>

                        <button
                            className='buttonNavHome lastikNavHome'
                            onMouseEnter={() =>
                                handleMouseEnter(
                                    'medicine',
                                    data[i18n.language]['medicine'][0].src
                                )
                            }
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className='navAddons'>{'<'}</span>
                            <NavLink to='/medicine'>
                                {t('translation.medicine')}
                            </NavLink>
                        </button>
                    </li>
                </ul>
            </nav>
            <div className='cursor'>
                {cursorImage && <img src={cursorImage} alt='cursorImage' />}
            </div>
        </>
    );
};

export default DesktopNavHome;
