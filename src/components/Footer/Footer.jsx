import React from 'react';
import './Footer.css';

import camaracomercio from '/logos/camaracomercio.png';
import cluster from '/logos/ClusterdaComunicacionlogoclusterdecomunicacion.png';
import groupclusaga from '/logos/groupclusaga.png';
import logoasebio from '/logos/LogoAsebioNombrecompletoTRANSPARENTE.png';
import viratec from '/logos/VIRATEC.png';

function Footer() {
    return (
        <footer>
            <section className='footertext'>
                <p>unusual agency</p>

                <p> hola@ingenyus.es</p>

                <p>únete al equipo talent@ingenyus.es</p>

                <p>
                    +34 981 227 225 +34 968 107 558 R.Real,24, 1º, 15003 A
                    Coruña
                </p>

                <section>
                    <a href='linkedin'> Linkedin</a>
                    <a href='twitter'> Twitter</a>
                    <a href='instagram'> Instagram</a>
                    <a href='T'>T</a>
                </section>

                <p className='footertext'> Kit digital</p>
            </section>
            <section className='logos'>
                <img src={logoasebio} alt='Logo ASEBIO' />
                <img
                    src={groupclusaga}
                    alt='Logo Group Cluster Alimentario de Galicia'
                />
                <img src={camaracomercio} alt='Logo de la cámara de comercio' />
                <img src={viratec} alt='Logo Viratec' />

                <img
                    src={cluster}
                    alt='Logo Cluster de Comunicacion de Galicia'
                />
            </section>
        </footer>
    );
}

export default Footer;
