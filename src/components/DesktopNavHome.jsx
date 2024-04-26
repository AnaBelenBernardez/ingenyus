import { useTranslation } from 'react-i18next';
import '../css/layout/_HomePage.css';
import { NavLink } from 'react-router-dom';

const DesktopNavHome = () => {
    const { t } = useTranslation();

    return (
        <nav className='homeNav'>
            <ul>
                <li>
                    <button className='buttonNavHome lastikNavHome'>
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

                    <button className='buttonNavHome satoshiNavHome'>
                        <span className='navAddons'>/</span>
                        <NavLink to='physics'>
                            {t('translation.physics')}
                        </NavLink>
                    </button>
                </li>
                <li id='liNavHome'>
                    <button className='buttonNavHome lastikNavHome'>
                        <span className='navAddons'>{'>'}</span>
                        <NavLink to='biology'>
                            {t('translation.biology')}
                        </NavLink>
                    </button>
                    <button className='buttonNavHome lastikNavHome'>
                        <span className='navAddons'>{'–'}</span>
                        <NavLink to='computer-science'>
                            {t('translation.computerScience')}
                        </NavLink>
                    </button>
                </li>

                <li>
                    <button className='buttonNavHome italicNavHome'>
                        <span className='navAddons'>#</span>
                        <NavLink to='mathematics'>
                            {t('translation.mathematics')}
                        </NavLink>
                    </button>

                    <button className='buttonNavHome lastikNavHome'>
                        <span className='navAddons'>{'<'}</span>
                        <NavLink to='medicine'>
                            {t('translation.medicine')}
                        </NavLink>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default DesktopNavHome;
