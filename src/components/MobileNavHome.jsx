import { useTranslation } from 'react-i18next';
import '../css/layout/_HomePage.css';
import { NavLink } from 'react-router-dom';

const MobileNavHome = () => {
    const { t } = useTranslation();

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
                    <button className='buttonNavHome lastikNavHome'>
                        <NavLink to='/chemistry'>
                            {t('translation.chemistry')}
                        </NavLink>
                    </button>
                </li>
                <li>
                    <span className='navAddons'>/</span>
                    <button className='buttonNavHome satoshiNavHome'>
                        <NavLink to='/physics'>
                            {t('translation.physics')}
                        </NavLink>
                    </button>
                </li>
                <li>
                    <span className='navAddons'>{'>'}</span>
                    <button className='buttonNavHome lastikNavHome'>
                        <NavLink to='/biology'>
                            {t('translation.biology')}
                        </NavLink>
                    </button>
                </li>
                <li>
                    <span className='navAddons'>{'–'}</span>
                    <button className='buttonNavHome lastikNavHome'>
                        <NavLink to='/computer-science'>
                            {t('translation.computerScience')}
                        </NavLink>
                    </button>
                </li>
                <li>
                    <span className='navAddons'>#</span>
                    <button className='buttonNavHome italicNavHome'>
                        <NavLink to='/mathematics'>
                            {t('translation.mathematics')}
                        </NavLink>
                    </button>
                </li>
                <li>
                    <span className='navAddons'>{'<'}</span>
                    <button className='buttonNavHome lastikNavHome'>
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
