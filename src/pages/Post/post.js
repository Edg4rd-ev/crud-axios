import React from "react";
import Header from "../../components/header/Header"
import {useForm} from "react-hook-form";
import "./post.css";

function Post () {
  const {register, handleSubmit, formState: {erros}} = useForm();
  return(
    <div>
      <Header/>
      <main>
        <div className="card-post">
          <h2>Register</h2>
          <hr className="line-post"></hr>
          <div className="card-body-post">
            <form>
              <div className="fields">
                <label>Name</label>
                <input type="text" placeholder="type your name here"/>
              </div>
              <div className="fields">
                <label>E-mail</label>
                <input type="text" placeholder="example@email.com"/>
              </div>
              <div className="btn-post">
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Post;