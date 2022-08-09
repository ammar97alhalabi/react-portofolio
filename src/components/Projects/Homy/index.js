import AnimatedLetters from "../../AnimatedLetters";
import { useEffect,useState } from "react";
import './index.scss'
import h1 from '../../../assets/images/Homy/1.jpg'
import h2 from '../../../assets/images/Homy/2.jpg'
import h3 from '../../../assets/images/Homy/3.jpg'
import h4 from '../../../assets/images/Homy/4.jpg'
import h5 from '../../../assets/images/Homy/5.jpg'
import h6 from '../../../assets/images/Homy/6.jpg'
import h7 from '../../../assets/images/Homy/7.jpg'
import h8 from '../../../assets/images/Homy/8.jpg'
import h9 from '../../../assets/images/Homy/9.jpg'

import h10 from '../../../assets/images/Homy/10.jpg'
import Loader from "react-loaders";

const Homy=()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    
    const [imgSrc, setImgSrc] = useState(h1);
    // const img=[h1,h2,h3,h4,h5,h6,h7,h8,h9,10];
   
    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover');
    },4000);
    },[])
    return (
        <><div className='container homy-page'>
            <li className="image-view">

                <img src={imgSrc} alt=''></img>
            </li>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={['H', 'o', 'm', 'y']} idx={17} letterClass={letterClass} />
                </h1>
                <p>Homy is a real estate online market, that enables the user to add an offer, or rent/sell a home ,filter the nearest offer based on gps, price, or type</p>
                <div>
                    <table>
                        <ul className="before">
                            <li>
                                <img src={h1} alt='' onMouseOver={() => setImgSrc(h1)} />
                            </li>
                            <li>
                                <img src={h2} alt='' onMouseOver={() => setImgSrc(h2)} />
                            </li>
                            <li>
                                <img src={h3} alt='' onMouseOver={() => setImgSrc(h3)} />
                            </li>
                            <li>
                                <img src={h4} alt='' onMouseOver={() => setImgSrc(h4)} />
                            </li>
                            <li>
                                <img src={h5} alt='' onMouseOver={() => setImgSrc(h5)} />
                            </li>


                        </ul>
                        <ul className="after">
                            <li>
                                <img src={h6} alt='' onMouseOver={() => setImgSrc(h6)} />
                            </li>
                            <li>
                                <img src={h7} alt='' onMouseOver={() => setImgSrc(h7)} />
                            </li>
                            <li>
                                <img src={h8} alt='' onMouseOver={() => setImgSrc(h8)} />
                            </li>
                            <li>
                                <img src={h9} alt='' onMouseOver={() => setImgSrc(h9)} />
                            </li>
                            <li>
                                <img src={h10} alt='' onMouseOver={() => setImgSrc(h10)} />
                            </li>

                        </ul>
                    </table>
                </div>

            </div>
        </div><Loader type="ball-scale-ripple-multiple" /></>
    )
    

}
export default Homy