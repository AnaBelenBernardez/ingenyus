import { BotonSimple } from '../BotonSimple/BotonSimple';
import '../../css/layout/_Contact&Newsletter.css';
import { useState } from 'react';

export function Contact_Newsletter() {
    const [showHiddenForm, setShowHiddenForm] = useState(false);

    const handleButtonClick = () => {
        setShowHiddenForm(true);
    };

    return (
        <>
            <section className='newsletter_contact'>
                <div className='contact'>
                    <h4 className='both_title'>contacto</h4>
                    <p className='nc_text'>
                        Resumir en una web todo lo que hacemos es complicado. Te
                        invitamos a que nos cuentes sobre tu proyecto.
                    </p>
                    <p className='nc_text'>
                        Nuestro equipo se reunirá contigo para valorar
                        conjuntamente en qué podemos ayudarte. Nos podemos
                        reunir por videollamada, en un café o en nuestras
                        oficinas en Calle Real 24, Planta 1ª, 15003, A Coruña.
                    </p>
                    <div className='contact_button_box'>
                        <BotonSimple
                            clase={'button_contact'}
                            children={'contacto'}
                            onClick={handleButtonClick}
                        />
                        <div
                            className={`hidden_form ${showHiddenForm ? 'visible' : ''}`}
                        >
                            <form
                                action='https://ingenyus.us15.list-manage.com/subscribe/post'
                                method='POST'
                            >
                                <input type='hidden' name='u' />
                                <input
                                    type='hidden'
                                    name='id'
                                    value='ef5c40ecca'
                                />
                                <input
                                    type='email'
                                    placeholder='email@ejemplo.com'
                                    className='contacto_email_input'
                                    autocapitalize='off'
                                    autocorrect='off'
                                    name='EMAIL'
                                    id='EMAIL'
                                    size='25'
                                    value=''
                                />
                                <input
                                    type='submit'
                                    class='subscribe_contact'
                                    name='submit'
                                    value='Subscribe'
                                ></input>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='newsletter'>
                    <div className='newsletter_left'>
                        <h4 className='both_title'>newsletter</h4>
                        <p className='nc_text'>
                            ¡Suscríbete! Prometemos no enviar demasiadas, y sólo
                            con información de interés como ofertas específicas,
                            financiación…
                        </p>
                    </div>
                    <div className='newsletter_right'>
                        <form className='newsletter_email' action=''>
                            <label className='nc_email' htmlFor=''>
                                email*
                            </label>
                            <input
                                type='email'
                                placeholder='email@ejemplo.com'
                            />
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
// =======
// import { BotonSimple } from '../BotonSimple/BotonSimple';
// import '../../css/layout/_Contact&Newsletter.css';
// import { t } from 'i18next';
// import { useTranslation } from 'react-i18next';

// export function Contact_Newsletter() {
//     const { t } = useTranslation();
//     return (
//         <section className='newsletter_contact'>
//             <div className='contact'>
//                 <h4 className='both_title'>{t('translation.contact')}</h4>
//                 <p className='nc_text'>{t('translation.description-home')}</p>
//                 <p className='nc_text'>{t('translation.description-home2')}</p>
//                 <div className='contact_button_box'>
//                     <BotonSimple
//                         clase={'button_contact'}
//                         children={'contacto'}
//                     />
//                 </div>
//             </div>
//             <div className='newsletter'>
//                 <div className='newsletter_left'>
//                     <h4 className='both_title'>newsletter</h4>
//                     <p className='nc_text'>
//                         {t('translation.description-newsletter')}
//                     </p>
//                 </div>
//                 <div className='newsletter_right'>
//                     <form className='newsletter_email' action=''>
//                         <label className='nc_email' htmlFor=''>
//                             email*
//                         </label>
//                         <input type='email' placeholder='email@ejemplo.com' />
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// }
