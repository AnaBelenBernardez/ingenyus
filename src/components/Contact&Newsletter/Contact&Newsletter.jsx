import { useState } from "react";
import "../../css/layout/_Contact&Newsletter.css";
import { useTranslation } from 'react-i18next';

export function Contact_Newsletter() {
    const [clickedInput, setClickedInput] = useState(false);
    const [showTextNewsletter, setShowTextNewsletter] = useState(false);


    const handleInputChangeEmailNewsletter = (event) => {
        setClickedInput(event.target.name);
        setShowTextNewsletter(event.target.value.trim() !== "");
    };



    const { t } = useTranslation();

    return (
        <section className="newsletter_contact">
            <div className="newsletter">
                <div className="newsletter_left">
                    <h4 className="both_title">newsletter</h4>
                    <p className="nc_text"> {t('translation.description-newsletter')}</p>
                </div>
                <div className="newsletter_right">
                    <form className="newsletter_email" action="">
                        <label className="nc_email" htmlFor="">email*</label>
                        <input type="hidden" name="u" />
                        <input type="hidden" name="id" value="ef5c40ecca" />
                        <input className={`hidden_form_input ${clickedInput === 'emaile' ? 'clicked' : ''}`} type="email" autoCapitalize="off" autoCorrect="off" placeholder="email@ejemplo.com" onClick={() => setClickedInput('emaile')} onChange={handleInputChangeEmailNewsletter} onBlur={() => setClickedInput(false)} name="EMAIL" id="EMAIL" size="25" />
                        <div className={`animation_checkbox ${showTextNewsletter ? 'slideDownCheckbox' : 'slideUpCheckbox'}`}>
                            <div className="checkbox_email_confirm">
                                <input type="checkbox" />
                                <label><strong>{t('translation.description-newsletter-confirm1')}</strong> {t('translation.description-newsletter-confirm2')}</label>
                            </div>
                            <input className="button_contact" name="submit" value="Subscribe" type="submit"></input>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

