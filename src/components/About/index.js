import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {useState,useEffect} from 'react'
const About =()=>{
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover');
    },4000);
    },[])
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={['A','b','o','u','t',' ','M','e'] }idx={17} letterClass={letterClass} />
                </h1>
                <p>
                    I'm very ambitious software engineer looking for a role in established IT company
                    with the oppertunity to work with the lates technologies on challenging and divers projects.
                </p>
                <p>
                    I'm quietly confident, naturally curious, and preptually working on improving my chops
                    one problem at a time.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a family person, a sports fanatic , and tech-obsessed!!! 
                </p>
            </div>
        </div>
    )
    
}
export default About