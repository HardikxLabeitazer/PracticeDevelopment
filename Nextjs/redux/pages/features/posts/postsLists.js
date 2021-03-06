import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import React from 'react'
import TimeAgo from "./timeago";
import PostAuthor from "./postAuthor";
import ReactionButton from "./reactionButton";
const PostsLists = () => {

    const posts = useSelector(selectAllPosts);
    
    const renderedPosts = posts.map(post => (
        <article className="border-2 border-red-500 p-5 m-7" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p>
                <PostAuthor userId={post.userId} />
                {console.log("hi"+(post.date).toString())}
                <TimeAgo timestamp={post.date}/>
            </p>
            <ReactionButton post={post}/>
              
        </article>
    ))
    return (
        <section className="flex bg-gray-200 text-lg justify-center  text-center  items-center">
            <div>
                <h2>Posts</h2>
                {renderedPosts}
            </div>

        </section>
    )
}

export default PostsLists