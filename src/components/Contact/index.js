import './index.scss';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import { Link ,NavLink} from 'react-router-dom'
import Loader from 'react-loaders';
const Contact =()=>{
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_u4gbymh', 'template_2y88ren', form.current, 'AWQkLP3epqss1yWX5')
        .then((result) => {
            alert(result.text);
            window.location.reload(false);
        }, (error) => {
            alert(error.text);

            // window.location.reload(true);
        });
    };
  
        const [letterClass, setLetterClass] = useState('text-animate')

        useEffect(() => {
            setTimeout(() => {
            setLetterClass('text-animate-hover');
        },4000);
        },[])
        return (
            <><div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} idx={17} letterClass={letterClass} />
                    </h1>
                    <form ref={form} className='contact-form' onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type={'text'} name='name' placeholder='Name' required></input>
                        </li>
                        <li className='half'>
                            <input type={'email'} name='email' placeholder='Email' required></input>
                        </li>
                        <li>
                            <input type={'text'} name='subject' placeholder='Subject' required></input>
                        </li>
                        <li>
                            <textarea placeholder='Message' name='message' required></textarea>
                        </li>
                        <li>
                            <input type={'submit'} className='flat-button' value={'SEND'} ></input>
                        </li>
                    </ul>
                    </form>
                </div>
            </div><Loader type='ball-scale-ripple-multiple'/></>
        )
        
    
}
export default Contact

