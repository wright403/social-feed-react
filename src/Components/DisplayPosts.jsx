import React, { useState } from "react";
const DisplayPosts = ({ posts }) => {
  return (
    <ul>
      {posts.map((post, index) => (
        <li key={index}>{post.name} - {post.post}</li>
      ))}
    </ul>
  );
};

export default DisplayPosts;
