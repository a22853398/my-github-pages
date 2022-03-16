// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Recaptcha from 'react-google-recaptcha';

const mystiekey = "6LeSYeUeAAAAABGdt9EA6DP3VLnItZVYu2WBT0vJ";
function onMyChange(value){
  console.log('Captcha value', value);
}

function ContactForm() {
  const [state, handleSubmit] = useForm("xgedzydp");
  if (state.succeeded) {
      return <p>お問い合わせいただき、誠にありがとうございます。</p>;
  }
  

  return (
      <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <Recaptcha sitekey={mystiekey} onChange={onMyChange}/>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}
export default ContactForm;