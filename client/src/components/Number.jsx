import React from 'react'
import { useParams } from 'react-router-dom'

const Number = (props) => {
    const { param } = useParams();
    
    
    return (
        
            isNaN(param) ?  (<p>The word is: {param} </p>) :(<p>The number is: {param}</p>) 
        
  )
}

export default Number