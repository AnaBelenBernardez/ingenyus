import { NavLink } from 'react-router-dom';
import './style.css';
import LanguageSelector from '../LanguageSelector';

function Nav() {
    // function handleChange(event) {
    //     const selectedValue = event.target.value;
    // }

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
                        <NavLink to='chemistry'>química</NavLink>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <NavLink to='physics'>física</NavLink>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <NavLink to='biology'>biología</NavLink>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <NavLink to='computer-science'>computación</NavLink>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <NavLink to='mathematics'>matemáticas</NavLink>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <NavLink to='medicine'>medicina</NavLink>
                    </button>
                </li>
                <LanguageSelector />
            </ul>
        </nav>
    );
}

export default Nav;
