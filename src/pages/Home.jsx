import { useTranslation } from 'react-i18next';
import '../css/layout/_HomePage.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const { t } = useTranslation();

    return (
        <main className='noise homePage'>
            <div className='landingHome'>
                <h1 className='homeTitle'>
                    <span id='homeTitle1'> {t('translation.title')}</span>
                    <span id='homeTitle2'>
                        <img
                            id='homeHABAddon'
                            src='./logos/HAB_icon.svg'
                            alt=''
                        />
                        {t('translation.title2')}
                    </span>
                    <span id='homeTitle3'>
                        {t('translation.title3')}
                        <img
                            id='homeINAddon'
                            src='./logos/in_asterisco.svg'
                            alt=''
                        />
                    </span>
                </h1>
                <span className='colab'>ingenyus x hack a boss</span>
                <div className='homeScrollContainer'>
                    <span>scroll</span>
                    <div className='homeScroll'>
                        <svg
                            width='14'
                            height='9'
                            viewBox='0 0 14 9'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M6.6678 8.14006L0.0512695 1.52353L0.699949 0.874847L6.6678 6.8427L12.6357 0.874847L13.2843 1.52353L6.6678 8.14006Z'
                                fill='white'
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <nav className='homeNav'>
                <ul>
                    <li>
                        <span>
                            <img
                                className='navAddons'
                                src='./logos/in_asterisco.svg'
                                alt=''
                            />
                        </span>
                        <button className='buttonNavHome lastikNavHome'>
                            <NavLink to='chemistry'>
                                {t('translation.chemistry')}
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        <span className='navAddons'>/</span>
                        <button className='buttonNavHome satoshiNavHome'>
                            <NavLink to='physics'>
                                {t('translation.physics')}
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        <span className='navAddons'>{'>'}</span>
                        <button className='buttonNavHome lastikNavHome'>
                            <NavLink to='biology'>
                                {t('translation.biology')}
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        <span className='navAddons'>{'–'}</span>
                        <button className='buttonNavHome lastikNavHome'>
                            <NavLink to='computer-science'>
                                {t('translation.computerScience')}
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        <span className='navAddons'>#</span>
                        <button className='buttonNavHome italicNavHome'>
                            <NavLink to='mathematics'>
                                {t('translation.mathematics')}
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        <span className='navAddons'>{'<'}</span>
                        <button className='buttonNavHome lastikNavHome'>
                            <NavLink to='medicine'>
                                {t('translation.medicine')}
                            </NavLink>
                        </button>
                    </li>
                </ul>
            </nav>
        </main>
    );
};

export default Home;
