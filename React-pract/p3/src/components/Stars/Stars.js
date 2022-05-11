import React,{useState} from 'react'
import StarRating from './StarRating'
const createArray = length =>[...Array(length)]
function Stars(style={},{totalStars=5},...props)
 {
    const [selectedStars,setSelectedStars]=useState(0);
    return (
        <div style={{padding:"5px",...style}}{...props}>
        {createArray(totalStars).map((n,i)=>(
            <StarRating key={i} selected={selectedStars>i} onSelect={()=> setSelectedStars(i+1)} />
        ))}
        <p>
            {selectedStars} of {totalStars} stars
        </p>
        
        
        
        </div>
    )
}

export default Stars