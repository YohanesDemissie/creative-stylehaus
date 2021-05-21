import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return(
    <div className="contact-container">
              <a className="contact-title" href="mailto:yohanes2o6@gmail.com?bcc=julie.patrick@clickdimensions.com&subject=Inquiring%20for%20New%20Year's%20Eve%20Party%20&body=Hi%20Catrina,%0d%0dI%20would%20like%20to%20RSVP%20to%20your%20party%20invitation.%20Here%20are%20my%20details:%0d%0dName:%20Eryka%20Adams%0dNumber%20of%20Guest:%0d" rel="EMAIL"><u>Click here </u>to reach out and start a conversation, today!</a>

      <h1 className="contact-title">Contact</h1>

      <form encType="multipart/form-data" action="mailto:info@w3docs.com" method="GET" >
      <div>
        <label htmlFor="name">
          <input className="input-form" type="text" name="name" id="name" placeholder="Name"/>
        </label>
      </div>
      <br />
      <div>
        <label htmlFor="email">
          <input className="input-form" type="text" name="email" id="email" placeholder="Email"/>
        </label>
      </div>
      <br />
      <div>
        <label htmlFor="subject">
          <input className="input-form" type="subject" name="subject" id="subject" placeholder="Subject"/>
        </label>
      </div>
      <br />

      <div>
        <br />
        <label htmlFor="email">
        <input className="input-message-form" name="Inquiry" type="text" placeholder="Send your comments to us." />
        </label>
      </div>
      <div>

        <input className="submit-button" type="submit" name="submit" value="Send" />
        {/* <input type="reset" name="reset" value="Clear Form" /> */}
      </div>
        {/* <a className="contact-title" href="mailto:yohanes2o6@gmail.com?bcc=julie.patrick@clickdimensions.com&subject=Inquiring%20for%20New%20Year's%20Eve%20Party%20&body=Hi%20Catrina,%0d%0dI%20would%20like%20to%20RSVP%20to%20your%20party%20invitation.%20Here%20are%20my%20details:%0d%0dName:%20Eryka%20Adams%0dNumber%20of%20Guest:%0d" rel="EMAIL">Click here to reach out and start a conversation, today!</a> */}

    </form>
    </div>
  )
}

export default Contact;