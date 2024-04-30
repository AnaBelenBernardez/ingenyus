import { useState } from "react";
import "../../css/layout/_Contact&Newsletter.css";
import { useTranslation } from 'react-i18next';

export function Contact_Newsletter() {
    const [showHiddenForm, setShowHiddenForm] = useState(false);
    const [contactHeight, setContactHeight] = useState(0);

    const toggleHiddenForm = () => {
        setShowHiddenForm(prevState => !prevState);
        // Ajuste a altura para o máximo quando o botão for clicado
        setContactHeight(prevHeight => prevHeight === 0 ? '100%' : 0);
    }

    const { t } = useTranslation();

    return (
        <section className="newsletter_contact">
            <div className={`contact ${showHiddenForm ? 'expanded' : ""}`} style={{ height: contactHeight }}>
                <h4 className="both_title">{t('translation.contact')}</h4>
                <p className="nc_text">{t('translation.description-home')}</p>
                <p className="nc_text">{t('translation.description-home2')}</p>
                <div className="contact_button_box">
                    <button className={`button_contact ${showHiddenForm ? 'transformed' : 'not-transformed'}`} onClick={toggleHiddenForm}>
                        {showHiddenForm ? 'X' : t('translation.contact')}
                    </button>
                </div>
                <section className={`hidden_form ${showHiddenForm ? 'visible' : ''}`}>
                    <div className="hidden_left">
                        <ul className="hl_text">
                            <li >hola@ingenyus.es</li>
                            <li>rrhh@ingenyus.es</li>
                            <li>+34 981 227 225</li>
                            <li>+34 698 107 558</li>
                            <li>Calle Real, 24, 1º</li>
                            <li>15003 A Coruña</li>
                        </ul>
                    </div>
                    <div className="hidden_right">
                        <form className="newsletter_email" action="">
                            <label className="nc_email" htmlFor="">nombre*</label>
                            <input className="hidden_form_input" type="text" placeholder="nombre" />
                            <label className="nc_email" htmlFor="">email*</label>
                            <input type="email" placeholder="email@ejemplo.com" />
                            <label className="nc_email" htmlFor="">asunto*</label>
                            <input type="text" placeholder="asunto" />
                            <label className="nc_email" htmlFor="">mensaje</label>
                            <input type="text" placeholder="mensaje" />
                        </form>
                        <form className="subscribe_form" action="https://ingenyus.us15.list-manage.com/subscribe/post" method="POST">
                            <input type="hidden" name="u" />
                            <input type="hidden" name="id" value="ef5c40ecca" />
                            <input type="email" placeholder="email@ejemplo.com" className="contacto_email_input" autocapitalize="off" autocorrect="off" name="EMAIL" id="EMAIL" size="25" value="" />
                            <input type="submit" className="subscribe_contact" name="submit" value="Subscribe"></input>
                        </form>
                    </div>
                </section>
            </div>
            <div className="newsletter">
                <div className="newsletter_left">
                    <h4 className="both_title">newsletter</h4>
                    <p className="nc_text"> {t('translation.description-newsletter')}</p>
                </div>
                <div className="newsletter_right">
                    <form className="newsletter_email" action="">
                        <label className="nc_email" htmlFor="">email*</label>
                        <input type="email" placeholder="email@ejemplo.com" />
                    </form>
                </div>
            </div>
        </section>
    );
}
