import React, { useState } from 'react';
const CreatePost = (props) => {
    
    
    
    const [name, setName] = useState('')
    const [post, setPost] = useState('')
    
    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        props.newPostProperty(newPost)
    }
    
    
    return ( 
        
        <form onSubmit={handleSubmit}>
            <div className='form-floating mb-3'>
                
            </div>
            <label>Name</label>
            <input type='name' className='form-control'  value={name} onChange={(event) => setName(event.target.value)} />
            <label>Post</label>
            <input type='text' className='form-control' value={post} onChange={(event) => setPost(event.target.value)} />
            <button type='submit' className='btn btn-primary' style={{'margin-right': '1em'}}>Create</button>
        </form>
     );
}
 
export default CreatePost;