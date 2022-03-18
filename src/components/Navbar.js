import './styles/Navbar.css'
import { NavLink, useLocation } from 'react-router-dom'
import Logout from './Logout'

const active = {
    color: '#20B2AA'
}

// export default function Navbar({ owner, setOwner }) {
//     const location = useLocation()

//     return (
//         <nav>
//             <div className='nav-top'>
//                 <Link to='/'><h1>M/D</h1></Link>
//                 { owner && <Logout setOwner={setOwner} /> }
//             </div>
//             <div className='links'>
//                 <Link style={ location.hash === '' ? active : {} } to='/'></Link>
//                 <Link style={ location.hash === '#projects' ? active : {} } to='/#projects' ></Link>
//                 <Link style={ location.hash === '#work' ? active : {} } to='/#work' ></Link>
//             </div>
//         </nav>
//     )
// }

export default function Navbar({ owner, setOwner }) {
        const location = useLocation()

    return (
        <nav>
            <h1>M/D</h1>
            <div className='nav-links'>
                <NavLink draggable={false} style={ location.hash === '' ? active : {} } to='/'>About</NavLink>
                <NavLink draggable={false} style={ location.hash === '#projects' ? active : {} } to='/#projects'>Projects</NavLink>
                <NavLink draggable={false} style={ location.hash === '#work' ? active : {} } to='/#work'>Connect</NavLink>
            </div>
        </nav>
    )
}