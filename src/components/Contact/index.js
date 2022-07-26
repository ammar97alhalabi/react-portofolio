import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link ,NavLink} from 'react-router-dom'
const Contact =()=>{
    
        const [letterClass, setLetterClass] = useState('text-animate')

        useEffect(() => {
            setTimeout(() => {
            setLetterClass('text-animate-hover');
        },4000);
        },[])
        return (
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['C','o','n','t','a','c','t',' ','M','e'] }idx={17} letterClass={letterClass} />
                    </h1>
                    <ul>
                        <li>
                            <a target="_blank" rel='noreferrer' href='https://www.Facebook.com'>
                            <FontAwesomeIcon icon={faFacebookF} color="#4d4d4e"></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>

                            <a target="_blank" rel='noreferrer' href='https://www.github.com'>
                            <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel='noreferrer' href='https://www.Linkedin.com'>
                            <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e"></FontAwesomeIcon>
                            </a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        )
        
    
}
export default Contact
