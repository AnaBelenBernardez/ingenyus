import { useState } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';

const BurgerNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = () => {
        setIsOpen(false);
        window.scrollTo(0, 0);
    };

    return (
        <>
            <div
                className={`botaoHamburguer ${isOpen ? 'open' : ''}`}
                id='nav-icon'
                onClick={handleMenuToggle}
            >
                <div className='botao-hover'>
                    <span></span>
                    <span className='hoverEffect'></span>
                    <span></span>
                </div>
            </div>
            <nav className={`navBurger ${isOpen ? 'open' : 'close'}`}>
                <ul>
                    <li>
                        <button className='buttonNav' onClick={handleItemClick}>
                            <NavLink exact='true' to='/'>
                                home
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        <button className='buttonNav' onClick={handleItemClick}>
                            <NavLink to='chemistry'>
                                {t('translation.chemistry')}
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        <button className='buttonNav' onClick={handleItemClick}>
                            <NavLink to='physics'>
                                {t('translation.physics')}
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        <button className='buttonNav' onClick={handleItemClick}>
                            <NavLink to='biology'>
                                {t('translation.biology')}
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        <button className='buttonNav' onClick={handleItemClick}>
                            <NavLink to='computer-science'>
                                {t('translation.computerScience')}
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        <button className='buttonNav' onClick={handleItemClick}>
                            <NavLink to='mathematics'>
                                {t('translation.mathematics')}
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        <button className='buttonNav' onClick={handleItemClick}>
                            <NavLink to='medicine'>
                                {t('translation.medicine')}
                            </NavLink>
                        </button>
                    </li>
                    <LanguageSelector />
                </ul>
            </nav>
        </>
    );
};

export default BurgerNav;
