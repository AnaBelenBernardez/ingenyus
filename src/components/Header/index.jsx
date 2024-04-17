import Nav from './Nav';
import Home from './Home';
import './style.css';

function Header() {
    return (
        <header>
            <Home className='home' />
            <Nav className='nav' />
        </header>
    );
}

export default Header;
