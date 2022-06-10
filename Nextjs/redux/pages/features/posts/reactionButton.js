import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";
import React from 'react'

const reactionemoji ={
    thumpsUp:'👍',
    wow:'😯',
    heart:'🤩',
    rocket:'🚣',
    coffee:'✍'
}



const ReactionButton = ({post}) => {

    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionemoji).map(([name,emoji])=>{
        return (
            <button
            key={name}
            type="button"
            className="reactionbutton"
            onClick={
                ()=>
                dispatch(reactionAdded({postId:post.id,reaction:name}))
            }
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })
    
  return (
    <div>
        {reactionButtons}
    </div>
  )
}

export default ReactionButton