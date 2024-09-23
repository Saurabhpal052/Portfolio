import React, { useRef } from "react";
import './Contacts.css';
import twitter from '../../assests/twitter.png';
import instagram from '../../assests/instagram.jpg';
import linkedin from '../../assests/linkedin.png';
import github from '../../assests/github.png';
import emailjs from '@emailjs/browser';




const Contact=()=>{
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(process.env.service_key);
    
    emailjs
      .sendForm("service_4smb6dv", "template_elvs81i", form.current, {
        publicKey:"tT7bmypSG8LQP72tl",
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Email successfully has been sent!");
          e.target.reset();
         

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }


    return (
        <section id="contact-section">
          <div className="contact">
            <h1 className="contact-heading">
                Contact Me
            </h1>
            <span className="contact-description">Please fill out the given form to contact me!</span>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <input className="name" type="text" placeholder="Your Name" name="your_name" required/>
                <input type="email" className="email" placeholder="Enter your e-mail" name="your_email" required/>
                <textarea name="message" className="msg" rows={5} placeholder="Enter your message" required/>
                <button type="submit" value="send" className="submit-btn">Submit</button>
            </form>
          </div>
          <div className="links">
           <a href="https://www.linkedin.com/in/saurabh-pal811/" target="blank"> <img className="link" src={linkedin} alt="linkdin"/></a>
           <a href="https://x.com/saurabhpal052" target="blank" ><img className="link" src={twitter} alt="twitter"/></a>
           <a href="https://github.com/Saurabhpal052" target="blank"> <img className="link" src={github} alt="github"/></a>
           <a href="https://www.instagram.com/saurabh_pal052/" target="blank"> <img className="link" src={instagram} alt="instagram"/></a>
          </div>
        </section>
    );
}
export default Contact;