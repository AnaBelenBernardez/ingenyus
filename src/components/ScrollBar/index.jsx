import './style.css';

function ScrollBar() {
    return (
        <div id='wrapper' aria-label='Barra de desplazamiento'>
            <div className='scrollbar' id='style-8'>
                <div className='force-overflow'></div>
            </div>
        </div>
    );
}

export default ScrollBar;
