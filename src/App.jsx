import React, { useState } from 'react';
import CreatePost from './Components/CreatePost.jsx';
import DisplayPosts from './Components/DisplayPosts.jsx';



function App() {
  
  
  const [posts, setPosts] = useState([{Name: 'fred', Post: 'Hello world'}])

function createPost(post){
  let tempPosts = [...posts, post];
  setPosts(tempPosts)
}
  
  
  return (
    <div>
     
     <DisplayPosts posts={posts} />
     <CreatePost newPostProperty={createPost}/>
     
    </div>
  );
}

export default App;
