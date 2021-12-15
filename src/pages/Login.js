import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/users'
import createJWT from '../services/utilities/createJWT'
import onDataChange from '../services/utilities/onDataChange'
import persistUser from '../services/utilities/persistUser'
import './styles/Login.css'

export default function Login({ owner, setOwner }) {
    const [formData, setFormData] = useState({})
    const [error, setError] = useState('')
    const navigate = useNavigate()

    function handleOnChange(e) {
        onDataChange(e, formData, setFormData)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const user = createJWT(await login({email: formData.email, password: formData.password}))
            setOwner(user)
            persistUser(user)
            navigate('/')
        } catch(e) {
            setError(e.message)
        }
    }

    return (
        <main>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <h1>Welcome, log yourself in</h1>
                <input type='text' name='email' onChange={handleOnChange} required />
                <input type='password' name='password' onChange={handleOnChange} required />
                <input type='submit'/>
            </form>
        </main>
    )
}