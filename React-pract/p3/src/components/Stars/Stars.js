import React from 'react'
import StarRating from './StarRating'
const createArray = length =>[...Array(length)]
// function Stars(style={},{totalStars=5},...props)
//  {
//     const [selectedStars,setSelectedStars]=useState(0);
//     return (
//         <div style={{padding:"5px",...style}}{...props}>
//         {createArray(totalStars).map((n,i)=>(
//             <StarRating key={i} selected={selectedStars>i} onSelect={()=> setSelectedStars(i+1)} />
//         ))}
//         <p>
//             {selectedStars} of {totalStars} stars
//         </p>
        
        
        
//         </div>
//     )
// }




function Stars({totalStars=10,selectedStars=1,onRate=f=>f}){
    return (
        <>
        {
                
                createArray(totalStars).map((n,i)=>(
            <StarRating key={i} selected={selectedStars >i} onSelect={()=>onRate(i+1)}/>
        ))}
        
        <p>
            {selectedStars} of {totalStars} stars
        </p>
        
        
        </>
    )
}

export default Stars
