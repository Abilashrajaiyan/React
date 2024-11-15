/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import propTypes, { number, string } from 'prop-types'

const Header = (props) => {
  return (
    <div>
        <tr>
            <th>Name:</th>
            <th>{props.name}</th>
        </tr>
        
        <tr>
            <th>age:</th>
            <th>{props.age}</th>
        </tr>
        
        <tr>
            <th>area:</th>
            <th>{props.area}</th>
        </tr>
         
        <tr>
            <th>Married:</th>
            <th>{props.married ?"yes":"no"}</th>
        </tr>
    </div>
  )
}
Header.propTypes = {
    name:propTypes.string,
    age:propTypes,number,
    area:propTypes,string,
    married:propTypes.bool
}

export default Header