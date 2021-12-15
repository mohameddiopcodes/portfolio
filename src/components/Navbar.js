import './styles/Navbar.css'
import { Link } from 'react-router-dom'
import Logout from './Logout'

export default function Navbar({ owner, setOwner }) {

    return (
        <nav>
            <Link to='/'>Me</Link>
            <Link to='/projects/1' >My Projects</Link>
            <Link to='/projects/1' >Work with me</Link>
            { owner && <Logout setOwner={setOwner} /> }
        </nav>
    )
}