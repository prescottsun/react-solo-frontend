import React, { useState, } from 'react'
import { withRouter } from 'react-router-dom'

const SearchTeleportAPI = (props) => {
    const [query, setQuery] = useState('')
    const [city, setCity] = useState('')

    const getCityData = async query => {
        const params = encodeURIComponent(query);
        let uri = 'https://api.teleport.org/api/cities/?search=' + params

        fetch(uri)
            .then(respons => respons.json())
            .then(json => {

            })
    }
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

export default withRouter(SearchTeleportAPI)
