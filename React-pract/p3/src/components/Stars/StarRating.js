import React from 'react'
import { FaStar } from 'react-icons/fa'
function StarRating({selected=false,onSelect=f=>f}) {

    return (
        <>
            <FaStar color={selected?"red":"grey"} onClick={onSelect}/>

        </>
    )
}

export default StarRating