import ContactHeader from './Contact/ContactHeader'
import ContactKonten from './Contact/ContactKonten'

const Contact = ()=>{

    return(
        <section className="page-section" id="contact">
            <ContactHeader/>
         {/* <!-- Contact Section Form--> */}
            <ContactKonten/>
        </section>
       
     
    )
}

export default Contact;