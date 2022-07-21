import React from "react";
import {Link} from "react-router-dom"

function Post () {
  return(
    <div>
      <h1>Page Post</h1>
      <Link to={"/"}>
        <button>Back to feed</button>
      </Link>
    </div>
  );
}
export default Post;