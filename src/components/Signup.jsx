import React, { useState } from 'react'

const Signup = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    const { firstName, lastName, email, password } = user

    const signup = async data => {
        const response = await fetch('http://localhost:9000/users/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        console.log(response)
        const reply = await response;
        if (reply.status === 200) {
            alert('user added');
        }
        if (reply.status !== 200) {
            alert('something went wrong')
        }

    }

    const handleSubmit = e => {
        e.preventDefault()
        const { firstName, lastName, email, password } = user

        const data = { firstName, lastName, email, password }
        signup(data)
    }

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type='text' name='firstName' value={firstName} onChange={handleChange} />
                <label>Last Name</label>
                <input type='text' name='lastName' value={lastName} onChange={handleChange} />
                <label>Email</label>
                <input type='text' name='email' required value={email} onChange={handleChange} />
                <label>Password</label>
                <input type='password' name='password' required value={password} onChange={handleChange} />
                <button type='submit'>Signup</button>

            </form>
        </div>
    )
}

export default Signup
