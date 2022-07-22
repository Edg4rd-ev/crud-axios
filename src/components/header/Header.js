import React from "react";
import {Link} from "react-router-dom";
import {HiArrowLeft} from "react-icons/hi"

function Header(){
  return(
    <header>
      <div className="content">
        <div className="logo">
          <h1>Test - P3</h1>
        </div>
        <div className="btn-newUser">
          <Link to={"/"}>
            <button><HiArrowLeft/></button>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;