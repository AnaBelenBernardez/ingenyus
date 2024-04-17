import { Link } from 'react-router-dom';
import './style.css';

function Home() {
    return (
        <div className='home'>
            <button className='buttonHome'>
                <Link id='linkHome' to='/'>
                    ingenyus*
                </Link>
            </button>
        </div>
    );
}

export default Home;
