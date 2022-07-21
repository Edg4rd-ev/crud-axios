import React from "react";
import {Link} from "react-router-dom";

function Feed () {
  return(
    <div>
      <h1>Page feed</h1>
      <Link to={"/post"}>
        <button>Add new user</button>
      </Link>
    </div>
  );
}
export default Feed;