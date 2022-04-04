import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts.jsx';



function App() {
  
  
  const [posts, setPosts] = useState([{Name: 'fred', Post: 'Hello world'}])


  
  
  return (
    <div>
     
     <DisplayPosts posts={posts} />
     
    </div>
  );
}

export default App;
