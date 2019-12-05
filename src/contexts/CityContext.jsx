import React, { createContext, useState } from 'react'

export const CityContext = createContext()

const CityContextProvider = (props) => {
    const [state, setState] = useState([{ city: 'Atlanta' }])

    return (
        <CityContext.Provider value={{ state }}>
            {props.children}
        </CityContext.Provider>

    )
}

export default CityContextProvider