import '../assets/styles/General.css';

const Loading = () => {
    return (
        <>
            <div className='overlay' aria-label='Loading'>
                <div className='noiseBack'></div>
                <div className='ellipseWhiteMap' id='e22'></div>
                <div className='ellipseWhiteMap' id='e18'></div>
                <div className='ellipseWhiteMap' id='e23'></div>
                <div className='ellipseWhiteMap' id='e19'></div>
                <div className='ellipseWhiteMap' id='e12'></div>
                <div className='ellipseWhiteMap' id='e14'></div>
                <div className='ellipseWhiteMap' id='e21'></div>
                <div className='ellipseWhiteMap' id='e15'></div>
                <div className='ellipseBlueMap' id='e24'></div>
                <div className='ellipseBlueMap' id='e25'></div>
                <div className='ellipseBlueMap' id='e13'></div>
                <div className='ellipseBlueMap' id='e20'></div>
                <div className='ellipseBlueMap' id='e17'></div>
                <div className='ellipseBlueMap' id='e16'></div>
            </div>

            <div className='spinner'>
                <svg
                    width='125'
                    height='127'
                    viewBox='0 0 125 127'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M124.123 67.432C123.524 66.2157 122.627 65.3036 121.43 64.9995L80.7475 53.5972L107.072 19.5422C107.82 18.478 108.268 17.1097 108.119 15.7415C108.119 14.3732 107.371 13.0049 106.324 12.2448L91.9653 0.994461C90.0209 -0.525848 87.4782 0.0822754 86.1321 2.21071L62.9488 39.9144L39.7655 2.21071C38.868 0.84243 37.6715 0.0822754 36.3254 0.0822754C35.5776 0.0822754 34.68 0.386337 34.0817 0.84243L18.9753 12.0927C17.9283 12.8529 17.1804 14.0691 17.0308 15.5894C16.8813 16.9577 17.1805 18.478 18.0779 19.5422L44.4021 53.5972L4.01838 64.9995C2.82182 65.3036 1.92451 66.2157 1.32624 67.432C0.727958 68.6482 0.727894 70.0165 1.02703 71.3848L6.56103 89.7805C6.86017 90.9968 7.75757 92.061 8.65499 92.5171C9.70198 93.1252 10.8985 93.1252 11.9455 92.6691L51.731 76.4018L49.4876 120.947C49.4876 122.315 49.7865 123.683 50.684 124.596C51.4318 125.508 52.6285 126.116 53.825 126.116H72.222C73.4185 126.116 74.4656 125.508 75.363 124.596C76.1109 123.531 76.5596 122.315 76.5596 120.947L74.017 76.5538L113.354 92.8212C115.448 93.7333 117.841 92.3651 118.738 89.9326L124.571 71.5368C125.02 70.1685 124.871 68.8003 124.272 67.584L124.123 67.432Z'
                        fill='var(--athens)'
                        title='Loading Spinner'
                    />
                </svg>
            </div>
        </>
    );
};

export default Loading;
