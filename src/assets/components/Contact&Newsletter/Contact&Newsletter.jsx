import { BotonSimple } from "../BotonSimple/BotonSimple"
import "./_Contact&Newsletter.css"

export function Contact_Newsletter() {


    return (
        <section className="newsletter_contact">
            <div className="contact">
                <h4 className="both_title">contacto</h4>
                <p className="nc_text">urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed</p>
                <p className="nc_text">nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem</p>
            </div>
            <div className="contact_button_box">
                <BotonSimple clase={"button_contact"} children={"contacto"} />
            </div>
            <div className="newsletter">
                <div className="newsletter_left">
                    <h4 className="both_title">newsletter</h4>
                    <p className="nc_text">urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed</p>
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