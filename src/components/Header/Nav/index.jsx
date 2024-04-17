import { Link } from 'react-router-dom';
import './style.css';

function Nav() {
    // function handleChange(event) {
    //     const selectedValue = event.target.value;
    // }

    return (
        <nav className='nav'>
            <ul>
                <li>
                    <button id='homeButton' className='buttonNav'>
                        <Link to='/'>home</Link>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <Link to='chemistry'>química</Link>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <Link to='physics'>física</Link>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <Link to='biology'>biología</Link>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <Link to='computer-science'>computación</Link>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <Link to='mathematics'>matemáticas</Link>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <Link to='medicine'>medicina</Link>
                    </button>
                </li>
                <li>
                    <select
                        className='buttonNav'
                        id='languageSelect'
                        // onChange={(e) => handleChange(e)}
                    >
                        <option value='es' selected>
                            es
                        </option>
                        <option value='en'>en</option>
                    </select>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
