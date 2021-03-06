import React from "react";
import { useSelector } from "react-redux";

const SinglePostPage = ({match}) => {

    const { postId } = match.params

    const post = useSelector(state => 
        state.posts.find(post => post.id === postId)
    )

    if(!post){
        return(
            <p>No post found</p>
        )
    }

    return(
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
            </article>
        </section>
    )
}


export default SinglePostPage;