import { Link ,NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/Ammar.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBriefcase, faHome ,faLink, faUser, } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faGithub, faLinkedinIn,} from '@fortawesome/free-brands-svg-icons'

const Sidebar=()=>(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'></img>
        </Link>
            {/* <p className='sub-logo'>Ammar</p>
             */}
        <nav>
            <NavLink exact="true" activeclassname="active" to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to='/about' >
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to='/contact'>
                <FontAwesomeIcon icon={faLink} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to='/projects'>
                <FontAwesomeIcon icon={faBriefcase} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/ammar-alhalabi-40698010a/'>
                    <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.facebook.com/ammar97alhalabi/'>
                    <FontAwesomeIcon icon={faFacebookF} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
           
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/ammar97alhalabi'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>
)
export default Sidebar