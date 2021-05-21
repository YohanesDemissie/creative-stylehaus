import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return(
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>

      <form action="mailto:info@w3docs.com" method="get" enctype="text/plain">
      <div>
        <label for="name">
          <input className="input-form" type="text" name="name" id="name" placeholder="Name"/>
        </label>
      </div>
      <br />
      <div>
        <label for="email">
          <input className="input-form" type="text" name="email" id="email" placeholder="Email"/>
        </label>
      </div>
      <br />
      <div>
        <label for="email">
          <input className="input-form" type="text" name="subject" id="subject" placeholder="Subject"/>
        </label>
      </div>
      <br />
      {/* <div>
        <label>Inquiry:</label>
        <br />
        <textarea name="Inquiry" rows="12" cols="35">Send your comments to us.</textarea>
      </div>
      <div>
        <input type="submit" name="submit" value="Send" />
        <input type="reset" name="reset" value="Clear Form" />
      </div> */}
    </form>

    </div>
  )
}

export default Contact;