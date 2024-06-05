import '../assets/styles/Maps.css';
import { Link } from 'react-router-dom';

const BodyAddons = () => {
    const goToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <img
                src='../../logos/in_asterisco.svg'
                className='bodyAddons'
                id='bodyIN'
                alt=''
            />
            <img
                src='../../logos/HAB_icon.svg'
                className='bodyAddons'
                id='bodyHAB'
                alt=''
            />
            <div id='colabBody' aria-label='Home' onClick={goToTop}>
                <Link className='colab' id='colabBodyLink' to='/'>
                    ingenyus x HACK A BOSS
                </Link>
            </div>
        </>
    );
};

export default BodyAddons;
