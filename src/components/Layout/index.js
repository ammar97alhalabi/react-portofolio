import Sidebar from '../Sidebar';
import './index.scss';
import LogoTitle from '../../assets/images/Ammar.png';

import { Outlet } from 'react-router-dom';
const Layout =()=>{
    return <div className='App'><Sidebar></Sidebar>
        <div className='page'>
            <span className='tags top-tags'>&lt;body&gt;</span>
            <div>
            <img className='back' src={LogoTitle} alt=''></img>
            </div> 
                
            <Outlet></Outlet>
            <span className='tags bottom-tags'>&lt;/body&gt;
            <br/>
            <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </span>
        </div>
    </div>
}

export default Layout