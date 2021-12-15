import { logout } from "../services/users"
import { useNavigate } from "react-router-dom"

export default function Logout({ setOwner }) {
    const navigate = useNavigate()

    function handleLogout() {
        logout()
        setOwner(null)
        navigate('/#about')
    }

    return <button onClick={handleLogout} >Log Out</button>
}