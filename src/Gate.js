import React from 'react'

const Gate = ({isOpen}) => {
    return  (
         <div>{isOpen ? "gate is open" : "probably closed"}</div> 
         )
    
}

export default Gate
