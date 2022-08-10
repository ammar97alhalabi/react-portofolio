import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState,useEffect } from 'react'
// import h1 from '../../assets/images/Skills/Flutter.svg'
// import h2 from '../../assets/images/Skills/Laravel.svg'
// import h3 from '../../assets/images/Skills/React-icon.svg'
// import h4 from '../../assets/images/Skills/logo1.png'
// import h5 from '../../assets/images/Skills/logo2.png'
// import h6 from '../../assets/images/Skills/logo3.png'
// import h7 from '../../assets/images/Skills/python-logo.svg'
// import h8 from '../../assets/images/Skills/'
// import h9 from '../../assets/images/Skills/'

const Skills=()=>{
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover');
    },4000);
    },[])
    return (
        <><div className='container skills-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']} idx={17} letterClass={letterClass} />
                </h1>
                <div>
                    <ul>
                        <li>
                        {/* <img src={h1} alt='' /> */}
                        </li>
                        <li>
                            {/* <img src={h2} alt='' /> */}
                        </li>
                        <li>
                            {/* <img src={h3} alt='' /> */}
                        </li>
                        <li>
                            {/* <img src={h7} alt='' /> */}
                        </li>
                    </ul>
                    <ul>
                        <li>
                            {/* <img src={h4} alt='' /> */}
                        </li>
                        <li>
                            {/* <img src={h5} alt='' /> */}
                        </li>
                        <li>
                            {/* <img src={h6} alt='' /> */}
                        </li>
                        
                    </ul>
                </div>

            </div>
        </div><Loader type='ball-scale-ripple-multiple' /></>
    )
}
export default Skills