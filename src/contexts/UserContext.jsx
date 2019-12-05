import React, { createContext, useState, useEffect } from 'react'
import { loadData } from '../utils/loadData'

export const UserContext = createContext()

const UserContextProvider = (props) => {
    const [user, setUser] = useState({
        isLoggedIn: false,
        firstName: 'placeholder',
        lastName: 'placeholder',
        email: 'placeholder'
    })

    const getUser = async () => {
        const response = await loadData("http://localhost:9000/users/login");
        console.log('getuser is: ', response)
        setUser(response);
    }


    return (
        <UserContext.Provider value={{ user, getUser }}>
            {props.children}
        </UserContext.Provider>

    )
}

export default UserContextProvider