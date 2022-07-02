import React, {useState} from 'react';
import './Contact.css';
import curve from '../../images/Curve.png'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { TailSpin, ThreeDots } from 'react-loader-spinner';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [checkName, setCheckName] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkMessage, setCheckMessage] = useState(false);

  const [checkSubmit, setCheckSubmit] = useState(false);

  const checkFieldsValue = (event, type) => {
    if(type === 'name'){
      if(event.target.value.length > 0){
        setCheckName(false);
      }else{
        setCheckName(true);
      }
      setName(event.target.value);
    }
    if(type === 'email'){
      if(event.target.value.length > 0){
        setCheckEmail(false);
      }else{
        setCheckEmail(true);
      }
      setEmail(event.target.value);
    }
    if(type === 'message'){
      if(event.target.value.length > 0){
        setCheckMessage(false);
      }else{
        setCheckMessage(true);
      }
      setMessage(event.target.value);
    }
  }

  const checkEmailValidation = (value) => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(regex.test(value) === false){
      setCheckEmail(true);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false
      });
      Toast.fire('Oops..!!', 'Please check your mail id..!!', 'info');
      setCheckSubmit(false);
      return false;
    }
    else {
      setCheckEmail(false);
      return true;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCheckSubmit(true);
    if(name && email && message) {
      if(checkEmailValidation(email)){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          timer: 5000,
          timerProgressBar: true,
          showConfirmButton: false
        });
        let sendObj = {
          from_name : name,
          from_email : email,
          message : message
        };

        emailjs.send('service_d9bnkac','template_avvohkj', sendObj, 'fuYy-eDXZZAlttuht').then(result => {
          Toast.fire('Email sent successfully..!!', 'I will be in touch with you very soon.', 'success');
          setName("");
          setEmail("");
          setMessage("");
          setCheckSubmit(false);
        }, error => {
          console.log(error.text);
          setCheckSubmit(false);
        });
      }
    }
    else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false
      });
      setCheckSubmit(false);
      Toast.fire('Oops..!!', 'Looks like you missed few fields.', 'info');
    }
  }

  return (
    <div className='contact-holder'>
      <h1 className='contact'>CONTACT</h1>
      <img src={curve} alt="Curve" className='Curve' />
      <div className="container align-box">
        <div className="contact-headings">
          <h2 className='contact-heading'>Contact</h2>
          <p>I am available for work.. Get in Touch</p>
        </div>
        <div className="contact-form">
          <input type="text" placeholder='Name' name="from_name" value={name} className={checkName ? 'text-input-error' : 'text-input'} onChange={e => checkFieldsValue(e, 'name')} />
          <input type="email" placeholder='Your Email' name="from_email" value={email} className={checkEmail ? 'text-input-error' : 'text-input'} onChange={e => checkFieldsValue(e, 'email')} />
          <textarea placeholder='Your Message' name="message" value={message} className={checkMessage ? 'text-area-error' : 'text-area'} onChange={e => checkFieldsValue(e, 'message')}></textarea>
          <button className={checkSubmit ? 'text-submitted' : 'text-button'} onClick={!checkSubmit ? handleSubmit : null}>
            {
              checkSubmit ?
              // <TailSpin color='#000' width={20} />

              <ThreeDots color="#000" width={30} />
              :
              'Submit'
            }
            </button>
        </div>
      </div>
    </div>
  )
}

export default Contact;
