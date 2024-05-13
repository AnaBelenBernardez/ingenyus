import '../css/layout/_Maps.css';

const BodyAddons = () => {
    return (
        <>
            <img
                src='../../logos/in_asterisco.svg'
                className='bodyAddons'
                id='bodyIN'
                alt='Icono de Ingenyus'
            />
            <img
                src='../../logos/HAB_icon.svg'
                className='bodyAddons'
                id='bodyHAB'
                alt='Icono de HAB'
            />
            <div id='colabBody'>
                <span className='colab'>ingenyus x hack a boss</span>
            </div>
        </>
    );
};

export default BodyAddons;
