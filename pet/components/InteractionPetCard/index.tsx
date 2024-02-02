'use client'

import React, { useState } from "react"

export default function InteractionPetCard({children}: {children: React.ReactNode}) {

    const [hover, setHover] = useState(false)

    function onMouseAction(event: React.SyntheticEvent) {
        if(event.type == 'mouseover'){
            setHover(true)
        }
        else {
            setHover(false)
        }
    }

    return(
        <div style={ hover ? {border: '2px solid black', boxShadow: '5px 4px #472F05',  backgroundColor: '#F79762', cursor: 'pointer'} : 
        {border: '2px solid black', boxShadow: '5px 4px #472F05',  backgroundColor: '#F3DDD1', cursor: 'default'}}
            onMouseOver={(e) => onMouseAction(e)}
            onMouseOut={(e) => onMouseAction(e)}>
            {children}
        </div>
    )
}