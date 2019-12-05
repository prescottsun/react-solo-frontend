import React, { useContext } from 'react'
import { UserContext } from "../contexts/UserContext";

const UserInfo = () => {
    const { user } = useContext(UserContext)

    return (
        <div>
            <p>First Name : {user.firstName}</p>
            <p>Last Name : {user.lastName}</p>
            <p>Email : {user.email}</p>

        </div>
    )
}

export default UserInfo
