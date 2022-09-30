import './ContactBtn.css';
import rollroyceCars from '../../images/roll-royce.webp';
import { useState } from 'react';

const Contact = () => {

   const [formStatus, setFormStatus] = useState('Send');
   const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('Submiting...')
      const { name, lastname , email, product } = e.target.elements
      let conFom = {
        firstname: name.value,
        lastname: lastname.value,
        email: email.value,
        product: product.value
      }
      console.log(conFom)
    }
    return(
    <div id='contact'>
       <div className='contact container'>
          <div className='contact-img'>
             <img  className='contact-img' src={rollroyceCars}></img>
          </div>
          <div className='contact-input'>
            <p className='contact-title'>Contact</p>
            <form onSubmit={onSubmit}>
            <div className='input-con'>
              <input className='input-name' placeholder='First Name'></input>
              <input className='input-surname' placeholder='Last Name'></input>
            </div>
            <input className='input-email' placeholder='E-mail'></input>
            <div className='input-con'>
                <input className='input-product' placeholder='Product'></input>
                <button className='input-button' type='submit'>{formStatus}</button>
            </div>
            </form>
          </div>
       </div>
       </div>
);
}
export default Contact;