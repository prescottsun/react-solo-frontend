import React, { useState, useEffect } from "react";
import { loadData } from "../utils/loadData";
import { Link } from 'react-router-dom'
import { Columns } from 'bloomer'

const CityList = () => {
  const [cities, setCities] = useState([]);

  const getCities = async () => {
    const cityNames = await loadData(
      `https://my-little-cors-proxy.herokuapp.com/https://developers.teleport.org/assets/urban_areas.json`
    );
    console.log('city names', cityNames)
    setCities(cityNames)
  };

  useEffect(() => {
    getCities()
    // console.log('cities', cities)
  }, [])


  return (
    <Columns>
      <ul id='cityColumns'>
        {Object.entries(cities).map(([key, city]) => {
          return (
            <>
              <ul><Link to={`/cities/${city}`}>{key}</Link></ul>

            </>
          )
        })}
      </ul>
    </Columns >
  )
};

export default CityList;
