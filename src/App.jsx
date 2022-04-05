import React, { useState, useEffect } from "react";
import CreatePost from "./Components/CreatePost.jsx";
import DisplayPosts from "./Components/DisplayPosts.jsx";

function App() {
  const [posts, setPosts] = useState([
    { name: "Fred", post: "A Test comment " },
    { name: "Cash", post: "A new comment" },
  ]);

  function createPost(post) {
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  useEffect(() => {
    // trigger a re-render
    console.log("useEffect - just fired off for App.js")
  }, [posts])

  return (
    <div>
      <CreatePost newPostProperty={createPost} />
      <DisplayPosts posts={posts} />
    </div>
  );
}

export default App;
