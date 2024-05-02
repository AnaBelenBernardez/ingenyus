import '../css/layout/_General.css';

export const ErrorPage = () => {
    const redirectToPage = () => {
        // Redirige a la página de Ingenyus
        window.location.href = '/';
    };
    return (
        <>
            <main className='landingHome errorPage'>
                <p className='errorcode'>404</p>
                <button onClick={redirectToPage} className='redireccion'>
                    volver al inicio
                </button>
            </main>
        </>
    );
};
