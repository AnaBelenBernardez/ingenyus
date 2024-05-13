import './Footer.css';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faLinkedin,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import camaracomercio from '/logos/camaracomercio.png';
import cluster from '/logos/ClusterdaComunicacionlogoclusterdecomunicacion.png';
import groupclusaga from '/logos/groupclusaga.png';
import logoasebio from '/logos/LogoAsebioNombrecompletoTRANSPARENTE.png';
import viratec from '/logos/VIRATEC.png';
import itemas from '/logos/itemas.webp';

function Footer() {
    const { t } = useTranslation();
    return (
        <footer>
            <nav>
                <ul className='footertext'>
                    <li className='unusual'>unusual agency</li>
                    <li>
                        <a href='mailto:hola@ingenyus.es'>hola@ingenyus.es</a>
                    </li>
                    <li className='unete'>
                        <p>únete al equipo</p>
                        <a href='mailto:talent@ingenyus.es'>
                            talent@ingenyus.es
                        </a>
                    </li>
                    <li>
                        <a href='tel:+34 981 227 225 '>+34 981 227 225</a>
                    </li>
                    <li>
                        <a href='tel:+34 968 107 558'>+34 968 107 558</a>
                    </li>
                    <li>
                        <address className='address'>
                            <a
                                href='https://www.google.com/search?q=ingenyus-marketing-consultoria'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                R. Real, 24, 1º, 15003 A Coruña
                            </a>
                        </address>
                    </li>
                </ul>
            </nav>
            <nav className='social'>
                <a href='https://www.linkedin.com/company/ingenyus/'>
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className='socialIcons'
                        aria-label='LinkedIn'
                    />
                </a>
                <a href='https://twitter.com/i/flow/login?redirect_after_login=%2Fingenyus_es'>
                    <FontAwesomeIcon
                        icon={faTwitter}
                        className='socialIcons'
                        aria-label='Twitter'
                    />
                </a>
                <a href='https://www.instagram.com/ingenyus.es'>
                    <FontAwesomeIcon
                        className='socialIcons'
                        icon={faInstagram}
                        aria-label='Instagram'
                    />
                </a>
            </nav>
            <a
                className='kit'
                target='_blank'
                href='https://www.ingenyus.es/kit-digital/'
            >
                Kit Digital
            </a>

            <p>{t('translation.part-of')}</p>
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
                <img src={itemas} alt='Logo Itemas Isciii' />
            </section>
            <section className='footerInfo'>
                <a
                    className='direction'
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.ingenyus.es/aviso-legal/'
                >
                    {t('translation.legal-notice')}
                </a>
                <a
                    className='direction'
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.ingenyus.es/politica-privacidad/'
                >
                    {t('translation.privacy-policy')}
                </a>
                <a
                    className='direction'
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.ingenyus.es/politica-cookies/'
                >
                    {t('translation.cookies-policy')}
                </a>
            </section>
        </footer>
    );
}

export default Footer;
