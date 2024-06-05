import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import '../assets/styles/HomePage.css';

const MobileNavHome = () => {
    const { t } = useTranslation();

    const goToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <nav className='homeNav'>
            <ul>
                <li>
                    <span>
                        <img
                            className='navAddons'
                            src='./logos/in_asterisco.svg'
                            alt='Logo ingenyus'
                        />
                    </span>
                    <button
                        className='buttonNavHome lastikNavHome'
                        onClick={goToTop}
                    >
                        <NavLink to='/chemistry'>
                            {t('translation.chemistry')}
                        </NavLink>
                    </button>
                </li>
                <li>
                    <span className='navAddons'>/</span>
                    <button
                        className='buttonNavHome satoshiNavHome'
                        onClick={goToTop}
                    >
                        <NavLink to='/physics'>
                            {t('translation.physics')}
                        </NavLink>
                    </button>
                </li>
                <li>
                    <span className='navAddons'>{'>'}</span>
                    <button
                        className='buttonNavHome lastikNavHome'
                        onClick={goToTop}
                    >
                        <NavLink to='/biology'>
                            {t('translation.biology')}
                        </NavLink>
                    </button>
                </li>
                <li>
                    <span className='navAddons'>{'–'}</span>
                    <button
                        className='buttonNavHome lastikNavHome'
                        onClick={goToTop}
                    >
                        <NavLink to='/computer-science'>
                            {t('translation.computerScience')}
                        </NavLink>
                    </button>
                </li>
                <li>
                    <span className='navAddons'>#</span>
                    <button
                        className='buttonNavHome italicNavHome'
                        onClick={goToTop}
                    >
                        <NavLink to='/mathematics'>
                            {t('translation.mathematics')}
                        </NavLink>
                    </button>
                </li>
                <li>
                    <span className='navAddons'>{'<'}</span>
                    <button
                        className='buttonNavHome lastikNavHome'
                        onClick={goToTop}
                    >
                        <NavLink to='/medicine'>
                            {t('translation.medicine')}
                        </NavLink>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default MobileNavHome;
