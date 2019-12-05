import React, { useState, useContext, useEffect } from "react";
import Iframe from "react-iframe";
import { CityContext } from "../contexts/CityContext";
import WidgetTabs from "./WidgetTabs";

const EmbeddedWidget = (props) => {
  // const { city } = useContext(CityContext)
  const [state, setState] = useState([])
  const [type, setType] = useState('')

  useEffect(() => {
    const city = props.match.params.city
    setState(city)
  }, [])

  const handleClick = e => {
    setType(e.target.value)
  }

  return (
    <container>
      <h1>
        {`${state}`.toUpperCase()}
      </h1>
      <WidgetTabs handleClick={handleClick} />

      <Iframe
        url={`https://teleport.org/cities/${state}/widget/${type}/?currency=USD&citySwitcher=false`}
        width="770px"
        height="958px"
        className="teleport-widget-script"
      // src="https://teleport.org/assets/firefly/widget-snippet.min.js"
      />
    </container>
  );
};

export default EmbeddedWidget;
