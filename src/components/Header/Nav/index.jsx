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
                        <Link to='/'>química</Link>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <Link to='/'>física</Link>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <Link to='/'>biología</Link>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <Link to='/'>computación</Link>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <Link to='/'>matemáticas</Link>
                    </button>
                </li>
                <li>
                    <button className='buttonNav'>
                        <Link to='/'>medicina</Link>
                    </button>
                </li>
                <li>
                    <select
                        className='buttonNav'
                        id='languageSelector'
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
