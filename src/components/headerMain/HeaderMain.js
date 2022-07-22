import React from "react";
import {Link} from "react-router-dom";
import "./HeaderMain.css";

function HeaderMain(){
  return(
    <header>
      <div className="content">
        <div className="logo">
          <h1>Test - P3</h1>
        </div>
        <div className="btn-newUser">
          <Link to={"/post"}>
            <button>Add new user</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default HeaderMain;