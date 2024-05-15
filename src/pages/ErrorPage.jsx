import '../css/layout/_General.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const ErrorPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <main className='landingHome errorPage'>
                <button className='buttonHome'>
                    <NavLink to='/' aria-label='Home'>
                        <img alt='home' src='/logos/in_logo_desktop.svg' />
                    </NavLink>
                </button>
                <p className='errorcode'>404</p>
                <NavLink className='redireccion' to='/'>
                    {t('translation.backHome')}
                </NavLink>
            </main>
        </>
    );
};
