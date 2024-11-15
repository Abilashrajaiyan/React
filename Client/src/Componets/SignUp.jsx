/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()

        //basic validation
        if(!name || !email|| !password){
            alert('Please fill in all fields')
            return
        }
        axios.post('http://localhost:3001/register', {name, email, password})
        .then((result)=>{
            console.log(result)
            navigate('/login')
        })
        .catch(err=>console.log(err))

    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-light'>
        <div className='p-3 rounded w-25'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor='Name'>
                        <strong>Name</strong>
                    </label>
                    <input type='text'
                     placeholder='Enter Name'
                      className='form-control'
                      onChange={(e)=>setName(e.target.value)}></input>
                </div>

                <div className="mb-3">
                    <label htmlFor='email'>
                        <strong>Email</strong>
                    </label>
                    <input type='email'
                     placeholder='Enter Email'
                      className='form-control'
                      onChange={(e)=>setEmail(e.target.value)}></input>
                </div>

                <div className="mb-3">
                    <label htmlFor='password'>
                        <strong>Password</strong>
                    </label>
                    <input type='password'
                     placeholder='Enter Password'
                      className='form-control'
                      onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                <button type='submit' className='btn btn-success w-100'>Register</button>
                <p>Already Have an Account? <a href='#'>Login</a></p>
                <Link to="/login"><button className='btn btn-danger w-100'>Login</button></Link>
            </form>

        </div>
    </div>
  )
}

export default SignUp