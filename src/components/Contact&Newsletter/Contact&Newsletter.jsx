import { BotonSimple } from '../BotonSimple/BotonSimple';
import '../../css/layout/_Contact&Newsletter.css';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

export function Contact_Newsletter() {
    const { t } = useTranslation();
    return (
        <section className='newsletter_contact'>
            <div className='contact'>
                <h4 className='both_title'>{t('translation.contact')}</h4>
                <p className='nc_text'>{t('translation.description-home')}</p>
                <p className='nc_text'>{t('translation.description-home2')}</p>
                <div className='contact_button_box'>
                    <BotonSimple
                        clase={'button_contact'}
                        children={'contacto'}
                    />
                </div>
            </div>
            <div className='newsletter'>
                <div className='newsletter_left'>
                    <h4 className='both_title'>newsletter</h4>
                    <p className='nc_text'>
                        {t('translation.description-newsletter')}
                    </p>
                </div>
                <div className='newsletter_right'>
                    <form className='newsletter_email' action=''>
                        <label className='nc_email' htmlFor=''>
                            email*
                        </label>
                        <input type='email' placeholder='email@ejemplo.com' />
                    </form>
                </div>
            </div>
        </section>
    );
}
