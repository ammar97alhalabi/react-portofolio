import './index.scss'
import {React,useState,useEffect} from 'react'
import AnimatedLetters from '../AnimatedLetters'
// import homyVideo from '../../assets/videos/Homy.mp4'
import homyImg from '../../assets/images/homy.jpg'
import ITMSImg from '../../assets/images/ITMS.jpg'
import MetaImg from '../../assets/images/Meta.png'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'



const Projects =()=>{
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover');
    },4000);
    },[])
    return (
        <><div className='container projects-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']} idx={17} letterClass={letterClass} />
                </h1>
                <div>
                    <ul>
                        <li>
                            <Link className="homy-link" to='/homy'>
                                <img src={homyImg} alt='' />
                            </Link>
                        </li>
                        <li>
                            <img src={ITMSImg} alt='' />
                        </li>
                        <li>
                            <img src={MetaImg} alt='' />
                        </li>
                    </ul>
                </div>

            </div>
        </div><Loader type='ball-scale-ripple-multiple' /></>
    )
}
export default Projects