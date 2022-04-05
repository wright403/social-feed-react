import React, { useState } from 'react';

const Posts = (props) => {
    

    const[likeActive, setLikeActive] = useState(false)
    const[dislikeActive, setDisLikeActive] = useState(true)
    
    
    function likeComment(){
        console.log("like: ", likeActive)
        if (!likeActive) {
            console.log("inside conditional")
            setLikeActive(true)
            setDisLikeActive(false)
        }
        alert(`Statuses have been switched - Liked: ${likeActive} Dislike: ${dislikeActive}` )
    }

    function dislikeComment(){
        if (!dislikeActive){
            console.log("inside d conditional")
            setDisLikeActive(true)
            setLikeActive(false)
        }
        alert(`Statuses have been switched - Liked: ${likeActive} Dislike: ${dislikeActive}` )
    }


    
    
    return(
        <div className= 'App'>
        <div></div>
        <button onClick={likeComment}>like {likeActive}</button>
        <button onClick={dislikeComment}>dislike {dislikeActive}</button>
        </div>
    )
}
    
    
    
    
    
    
    
        
           
 
export default Posts;