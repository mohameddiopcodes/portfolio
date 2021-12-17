import './styles/Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import Logout from './Logout'

const active = {
    background: '#20B2AA',
    width: '13px',
    height: '13px'
}

export default function Navbar({ owner, setOwner }) {
    const location = useLocation()

    return (
        <nav>
            <div className='nav-top'>
                <Link to='/'><h1>M/D</h1></Link>
                { owner && <Logout setOwner={setOwner} /> }
            </div>
            <div className='links'>
                <Link style={ location.hash === '' ? active : {} } to='/'></Link>
                <Link style={ location.hash === '#projects' ? active : {} } to='/#projects' ></Link>
                <Link style={ location.hash === '#work' ? active : {} } to='/#work' ></Link>
            </div>
        </nav>
    )
}