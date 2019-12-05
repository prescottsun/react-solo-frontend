import React, { useState } from 'react'
import { Button } from 'bloomer'

const WidgetTabs = ({ handleClick }) => {
    const [tabs, setTabs] = useState({
        'Quality of Life': 'scores',
        'Cost of Living': 'costs',
        'Job Salaries': 'salaries',
        'Safety': 'crime',
        'Education': 'education',
        'LGBT Rights': 'tolerance',
        'Climate': 'weather',
        'Outdoors': 'outdoors',
        'Startup Scene': 'startup',

    })


    return (
        <ul>
            {Object.entries(tabs).map(([key, value]) => {
                return (
                    <Button isOutlined isColor='dark' isSize='medium' value={value} onClick={handleClick}>{key}</Button>
                )
            })}
        </ul>
    )
}

export default WidgetTabs
