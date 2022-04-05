import React, { useState, useEffect } from "react";
import CreatePost from "./Components/CreatePost.jsx";
import DisplayPosts from "./Components/DisplayPosts.jsx";
import NavBar from "./Components/NavBar.jsx";
import Posts from "./Components/Posts.jsx";

function App() {
  const [posts, setPosts] = useState([
    { name: "Fred", post: "A Test comment ", like: false, dislike: false },
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
      <NavBar />
      <CreatePost newPostProperty={createPost} />
      <DisplayPosts posts={posts} />
      <Posts />
    </div>
  );
}

export default App;
