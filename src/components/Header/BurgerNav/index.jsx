import { slide as BurgerMenu } from 'react-burger-menu';
import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector';

class BurgerNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    handleItemClick = () => {
        this.setState({ isOpen: false });
    };

    handleMenuOpen = () => {
        this.setState({ isOpen: true });
    };

    handleMenuClose = () => {
        this.setState({ isOpen: false });
    };

    render() {
        return (
            <BurgerMenu
                right
                width={'100%'}
                isOpen={this.state.isOpen}
                className='burgerMenu'
                onOpen={this.handleMenuOpen}
                onClose={this.handleMenuClose}
                noOverlay
            >
                <nav className='navBurger'>
                    <ul>
                        <li>
                            <button
                                className='buttonNav'
                                onClick={this.handleItemClick}
                            >
                                <NavLink exact='true' to='/'>
                                    home
                                </NavLink>
                            </button>
                        </li>
                        <li>
                            <button
                                className='buttonNav'
                                onClick={this.handleItemClick}
                            >
                                <NavLink to='chemistry'>química</NavLink>
                            </button>
                        </li>
                        <li>
                            <button
                                className='buttonNav'
                                onClick={this.handleItemClick}
                            >
                                <NavLink to='physics'>física</NavLink>
                            </button>
                        </li>
                        <li>
                            <button
                                className='buttonNav'
                                onClick={this.handleItemClick}
                            >
                                <NavLink to='biology'>biología</NavLink>
                            </button>
                        </li>
                        <li>
                            <button
                                className='buttonNav'
                                onClick={this.handleItemClick}
                            >
                                <NavLink to='computer-science'>
                                    computación
                                </NavLink>
                            </button>
                        </li>
                        <li>
                            <button
                                className='buttonNav'
                                onClick={this.handleItemClick}
                            >
                                <NavLink to='mathematics'>matemáticas</NavLink>
                            </button>
                        </li>
                        <li>
                            <button
                                className='buttonNav'
                                onClick={this.handleItemClick}
                            >
                                <NavLink to='medicine'>medicina</NavLink>
                            </button>
                        </li>
                        <LanguageSelector />
                    </ul>
                </nav>
            </BurgerMenu>
        );
    }
}

export default BurgerNav;
