/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios' 

const Login = () => {
    const [email, setEmail] = useState('')  
    const [password, setPassword] = useState('')  
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        // Basic validation for email and password
        if (!email || !password) {
            setError('Both email and password are required')
            return
        }

        // Sending login request to the backend
        axios.post('http://localhost:3001/login', { email, password })
            .then((result) => {
                console.log(result)
                if(result.data === "success"){
                    navigate('/home')  
                }
            })
            .catch((err) => {
                console.log(err)
                setError('Invalid email or password')  
            })
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-light'>
            <div className='p-3 rounded w-25'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    {error && <div className="alert alert-danger">{error}</div>} 

                    <div className="mb-3">
                        <label htmlFor='email'>
                            <strong>Email</strong>
                        </label>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            className='form-control'
                            value={email}  
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor='password'>
                            <strong>Password</strong>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='form-control'
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>

                    <Link to='/home'><button type='submit' className='btn btn-success w-100'>Login</button></Link>
                </form>
            </div>
        </div>
    )
}

export default Login
