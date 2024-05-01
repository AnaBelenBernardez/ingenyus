import React from 'react';
import logoingenyus from '../../../public/logos/in_logo_desktop.svg';

export const BotonRedireccion = () => {
    const redirectToPage = () => {
        // Redirige a la página de Ingenyus
        window.location.href = 'https://www.ingenyus.es/';
    };

    return <button onClick={redirectToPage}>Ir a la página de Ingenyus</button>;
};

export const ErrorPage = () => {
    return (
        <>
            <header>
                <a href='https://www.ingenyus.es/'>
                    <img src={logoingenyus} alt='logo ingenius' />
                </a>
            </header>
            <p>404</p>
            <BotonRedireccion />{' '}
            {/* Coloca el botón dentro del componente ErrorPage */}
        </>
    );
};
