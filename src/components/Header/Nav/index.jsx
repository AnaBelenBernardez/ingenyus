import { NavLink } from 'react-router-dom';
import './style.css';
import LanguageSelector from '../LanguageSelector';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

function Nav() {
    const { t } = useTranslation();

    return (
        <nav className='nav'>
            <ul>
                <li>
                    <button className='buttonNav'>
                        <NavLink exact='true' to='/' activeclassname='active'>
                            home
                        </NavLink>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <NavLink to='chemistry'>
                            {t('translation.chemistry')}
                        </NavLink>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <NavLink to='physics'>
                            {t('translation.physics')}
                        </NavLink>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <NavLink to='biology'>
                            {t('translation.biology')}
                        </NavLink>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <NavLink to='computer-science'>
                            {t('translation.computerScience')}
                        </NavLink>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <NavLink to='mathematics'>
                            {t('translation.mathematics')}
                        </NavLink>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <NavLink to='medicine'>
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
