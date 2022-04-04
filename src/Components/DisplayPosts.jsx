import React, { useState } from 'react';
const DisplayPosts = (props) => {
    return ( 
        <ul>
            {props.posts.map((post) => <li>Hello Pascal</li>)}
        </ul>
     );
}
 
export default DisplayPosts;