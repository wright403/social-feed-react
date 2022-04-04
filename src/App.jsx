import React, { useState } from 'react';
import CreatePost from './Components/CreatePost.jsx';
import DisplayPosts from './Components/DisplayPosts.jsx';



function App() {
  
  
  const [posts, setPosts] = useState([{Name: 'fred', Post: 'Hello world'}])


  
  
  return (
    <div>
     
     <DisplayPosts posts={posts} />
     <CreatePost />
     
    </div>
  );
}

export default App;
