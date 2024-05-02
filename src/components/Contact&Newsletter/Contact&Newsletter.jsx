import { useState } from "react";
import "../../css/layout/_Contact&Newsletter.css";
import { useTranslation } from 'react-i18next';

export function Contact_Newsletter() {
    const [showHiddenForm, setShowHiddenForm] = useState(false);
    const [contactHeight, setContactHeight] = useState(0);
    const [clickedInput, setClickedInput] = useState(false);
    const [allInputsFilled, setAllInputsFilled] = useState(false);
    const [showText, setShowText] = useState(false);
    const [showTextNewsletter, setShowTextNewsletter] = useState(false);



    const handleInputChangeEmail = (event) => {
        setClickedInput(event.target.name);
        setShowText(event.target.value.trim() !== "");
        checkAllInputsFilled();
    };

    const handleInputChangeEmailNewsletter = (event) => {
        setClickedInput(event.target.name);
        setShowTextNewsletter(event.target.value.trim() !== "");
    };

    const checkAllInputsFilled = () => {
        const inputs = document.querySelectorAll('.hidden_form_input, .hidden_form_textarea');
        let allFilled = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
            }
        });

        setAllInputsFilled(allFilled);
    };

    const toggleHiddenForm = () => {
        setShowHiddenForm(prevState => !prevState);
        setContactHeight(prevHeight => prevHeight === 0 ? '100%' : 0);
    };

    const { t } = useTranslation();

    return (
        <section className="newsletter_contact">
            <div className={`contact ${showHiddenForm ? 'expanded' : "not-expanded"}`} style={{ height: contactHeight }}>
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
                            <li className="hl_li">hola@ingenyus.es</li>
                            <li className="hl_li">rrhh@ingenyus.es</li>
                            <li className="hl_li">+34 981 227 225</li>
                            <li className="hl_li">+34 698 107 558</li>
                            <li className="hl_li">Calle Real, 24, 1º</li>
                            <li className="hl_li">15003 A Coruña</li>
                        </ul>
                    </div>
                    <div className="hidden_right">
                        <form className="newsletter_email" action="">
                            <label className="nc_email" htmlFor="nombre">nombre*</label>
                            <input className={`hidden_form_input ${clickedInput === 'nombre' ? 'clicked' : ''}`} type="text" placeholder="nombre" onBlur={() => setClickedInput(false)} onClick={() => setClickedInput('nombre')} name="nombre" onChange={handleInputChangeEmail} />
                            <label className="nc_email" htmlFor="email">email*</label>
                            <input className={`hidden_form_input ${clickedInput === 'email' ? 'clicked' : ''}`} type="email" placeholder="email@ejemplo.com" onBlur={() => setClickedInput(false)} onClick={() => setClickedInput('email')} name="email" onChange={handleInputChangeEmail} />
                            <label className="nc_email" htmlFor="asunto">asunto*</label>
                            <input className={`hidden_form_input ${clickedInput === 'asunto' ? 'clicked' : ''}`} type="text" placeholder="asunto" onBlur={() => setClickedInput(false)} onClick={() => setClickedInput('asunto')} name="asunto" onChange={handleInputChangeEmail} />
                            <label className="nc_email" htmlFor="mensaje">mensaje</label>
                            <textarea className={`hidden_form_textarea ${clickedInput === 'mensaje' ? 'clicked' : ''}`} placeholder="mensaje" onBlur={() => setClickedInput(false)} onClick={() => setClickedInput('mensaje')} name="mensaje" onChange={handleInputChangeEmail}></textarea>
                            <div className={`animation_checkbox ${showText ? 'slideDownCheckbox' : 'slideUpCheckbox'}`}>
                                <div className="checkbox_email_confirm">
                                    <input type="checkbox" />
                                    <label><strong>he leído y acepto</strong> la política de privacidad</label>
                                </div>
                                <button className="button_contact">Unirme</button>
                            </div>
                        </form>
                        {/* <form className="subscribe_form" action="https://ingenyus.us15.list-manage.com/subscribe/post" method="POST">
                            <input type="hidden" name="u" />
                            <input type="hidden" name="id" value="ef5c40ecca" />
                            <input type="email" placeholder="email@ejemplo.com" className="contacto_email_input" autoapitalize="off" autocorrect="off" name="EMAIL" id="EMAIL" size="25" value="" />
                            <input type="submit" className="subscribe_contact" name="submit" value="Subscribe"></input>
                        </form> */}
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
                        <input className={`hidden_form_input ${clickedInput === 'emaile' ? 'clicked' : ''}`} type="email" placeholder="email@ejemplo.com" onClick={() => setClickedInput('emaile')} onChange={handleInputChangeEmailNewsletter} onBlur={() => setClickedInput(false)} />
                        <div className={`animation_checkbox ${showTextNewsletter ? 'slideDownCheckbox' : 'slideUpCheckbox'}`}>
                            <div className="checkbox_email_confirm">
                                <input type="checkbox" />
                                <label><strong>he leído y acepto</strong> la política de privacidad</label>
                            </div>
                            <button className="button_contact">Unirme</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
