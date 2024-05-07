import '../css/layout/_General.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const ErrorPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <main className='landingHome errorPage'>
                <p className='errorcode'>404</p>
                <NavLink className='redireccion' to='/'>
                    {t('translation.backHome')}
                </NavLink>
            </main>
        </>
    );
};
