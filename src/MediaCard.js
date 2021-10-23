import React from 'react'

const MediaCard = ({title,body,imgUrl}) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src = {imgUrl} alt = "shirt image"/>
                <div>{body}</div>
        </div>
    )
}

export default MediaCard
