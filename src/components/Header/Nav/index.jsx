import { NavLink } from 'react-router-dom';
import './style.css';
import LanguageSelector from '../LanguageSelector';
import { useTranslation } from 'react-i18next';

function Nav() {
    const { t } = useTranslation();

    return (
        <nav className='nav'>
            <ul role='navigation'>
                <li>
                    <button className='buttonNav'>
                        <NavLink
                            exact='true'
                            to='/'
                            activeclassname='active'
                            aria-label='Home'
                        >
                            home
                        </NavLink>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <NavLink
                            to='chemistry'
                            aria-label={t('translation.chemistry')}
                        >
                            {t('translation.chemistry')}
                        </NavLink>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <NavLink
                            to='physics'
                            aria-label={t('translation.physics')}
                        >
                            {t('translation.physics')}
                        </NavLink>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <NavLink
                            to='biology'
                            aria-label={t('translation.biology')}
                        >
                            {t('translation.biology')}
                        </NavLink>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <NavLink
                            to='computer-science'
                            aria-label={t('translation.computerScience')}
                        >
                            {t('translation.computerScience')}
                        </NavLink>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <NavLink
                            to='mathematics'
                            aria-label={t('translation.mathematics')}
                        >
                            {t('translation.mathematics')}
                        </NavLink>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <NavLink
                            to='medicine'
                            aria-label={t('translation.medicine')}
                        >
                            {t('translation.medicine')}
                        </NavLink>
                    </button>
                </li>
                <LanguageSelector />
            </ul>
        </nav>
    );
}

export default Nav;
