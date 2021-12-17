import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
            const user = await login({email: formData.email, password: formData.password})
            const token = createJWT(user)
            setOwner(user)
            persistUser(token)
            navigate('/')
        } catch(e) {
            setError(e.message)
        }
    }

    return (
        <main>
            {error && <p>{error}</p>}
            <form className='Login' onSubmit={handleSubmit} autoComplete="off">
                <div class='Login-image'>

                </div>
                <div class='Login-form'>
                    <h1>Login</h1>
                    <p>this an admin portal, you shouldn't be here if you're not the owner</p>
                    <input placeholder='xyz@email.com' type='text' name='email' onChange={handleOnChange} required />
                    <input placeholder='*************' type='password' name='password' onChange={handleOnChange} required />
                    <Link to='/'>back to portfolio</Link>
                    <input type='submit'/>
                </div>
            </form>
        </main>
    )
}