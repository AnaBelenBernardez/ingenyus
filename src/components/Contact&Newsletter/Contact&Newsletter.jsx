import { BotonSimple } from "../BotonSimple/BotonSimple"
import "../../css/layout/_Contact&Newsletter.css"

export function Contact_Newsletter() {


    return (
        <section className="newsletter_contact">
            <div className="contact">
                <h4 className="both_title">contacto</h4>
                <p className="nc_text">Resumir en una web todo lo que hacemos es complicado. Te invitamos a que nos cuentes sobre tu proyecto.</p>
                <p className="nc_text">Nuestro equipo se reunirá contigo para valorar conjuntamente en qué podemos ayudarte. Nos podemos reunir por videollamada, en un café o en nuestras oficinas en Calle Real 24, Planta 1ª, 15003, A Coruña.</p>
                <div className="contact_button_box">
                    <BotonSimple clase={"button_contact"} children={"contacto"} />
                </div>
            </div>
            <div className="newsletter">
                <div className="newsletter_left">
                    <h4 className="both_title">newsletter</h4>
                    <p className="nc_text">¡Suscríbete! Prometemos no enviar demasiadas, y sólo con información de interés como ofertas específicas, financiación…</p>
                </div>
                <div className="newsletter_right">
                    <form className="newsletter_email" action="">
                        <label className="nc_email" htmlFor="">email*</label>
                        <input type="email" placeholder="email@ejemplo.com" />
                    </form>
                </div>
            </div>
        </section>
    )
}