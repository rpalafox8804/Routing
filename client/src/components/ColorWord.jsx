import React from 'react'
import { useParams } from 'react-router-dom'

const ColorWord = (props) => {
    const { param, color1, color2 } = useParams();
    
    const textColor = {
        color: {color1}
    };
    const backgroundColor = {
        backgroundColor: {color2}
    };
  return (
    <div style={{ backgroundColor: color2}}>
        <h2 style={{color: color1}}>The word is: {param}</h2>
    </div>
  )
}

export default ColorWord