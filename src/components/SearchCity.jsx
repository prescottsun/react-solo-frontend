import React, { useState, } from 'react'
import { withRouter } from 'react-router-dom'

const SearchCity = (props) => {
    const [query, setQuery] = useState('')
    const [city, setCity] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    const handleSubmit = (e) => {
        const queryLC = query.toLowerCase()
        e.preventDefault()
        setCity(queryLC)
        setQuery('')
        props.history.push(`/cities/${queryLC}`)
    }
    return (

        <form onSubmit={handleSubmit}>
            {/* <label>City Search</label> */}
            <input type='text' name='query' value={query} onChange={handleChange} placeholder='Enter a city name'
            />
            <input type='submit' value="Search" />
        </form>
    )
}

export default withRouter(SearchCity)
