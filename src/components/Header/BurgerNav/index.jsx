import { slide as BurgerMenu } from 'react-burger-menu';
import { useState } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';

const BurgerNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { t } = useTranslation();

    const handleItemClick = () => {
        setIsOpen(false);
    };

    const handleMenuOpen = () => {
        setIsOpen(true);
    };

    const handleMenuClose = () => {
        setIsOpen(false);
    };

    return (
        <BurgerMenu
            right
            width={'100%'}
            isOpen={isOpen}
            className='burgerMenu'
            onOpen={handleMenuOpen}
            onClose={handleMenuClose}
            noOverlay
        >
            <nav className='navBurger'>
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
        </BurgerMenu>
    );
};

export default BurgerNav;
