
// import React, { useState } from 'react';
import React, { useRef,useState } from 'react';

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const form = useRef();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_16lvxjo', 'template_a3e7mpe', form.current, 'oJYBtmhSS5giX7ETT')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          setShowSuccessDialog(true);
      }, (error) => {
          console.log(error.text);
          
      });
  };
  const closeSuccessDialog = () => {
    // Close the success dialog
    setShowSuccessDialog(false);
  };

  const areAllFieldsFilled = () => {
    const requiredFields = form.current.querySelectorAll('[required]');
    for (const field of requiredFields) {
      if (!field.value.trim()) {
        return false;
      }
    }
    return true;
  };


  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}> <h2>Contact</h2><br/>
      <div><h1> Email</h1><p>rajatpayal@outlook.in</p></div><br /><br/>
      <div className={styles.link}>
  <a href="https://linkedin.com/in/rajatpayaal" className={styles.link}>
    <img
      src={getImageUrl("contact/linkedinIcon.png")}
      alt="LinkedIn icon"
      className="small-image"
    />
  </a>
  <a href="https://www.github.com/rajatpayaal/" className={styles.link}>
    <img
      src={getImageUrl("contact/githubIcon.png")}
      alt="Github icon"
      className="small-image"
    />
  </a>
 </div>
    
      
     
      
      </div>
      
   <div className={styles.box}>
        <div>
        <form ref={form} onSubmit={sendEmail} >

           <div className="field">
    <label className={styles.text2} for="from_name"><strong>Name</strong></label><br />
    <input type="text" name="from_name" id="from_name" required /><br />
  </div><br />
  <div class="field">
    <label className={styles.text2} for="to_name"><strong>Email</strong></label><br />
    <input 
    type="email" name="to_name" id="to_name" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" />
  </div><br />
  <div class="field">
    <label className={styles.text2}  for="message"><strong>Message</strong></label><br />
    <input type="text" name="message" id="message" required />
  </div><br />
  
  <input type="submit" id="button" value="Send Email" />

        </form>
      </div>

      </div>
      <div>
      {showSuccessDialog && (
        <div className={styles.successDialog}>
          <p>Your email was sent successfully!</p>
          <button onClick={closeSuccessDialog}>Close</button>
        </div>
      )}
      </div>
    
    </footer>
    
  );
};