import React from "react";
import Header from "../../components/header/Header"
import {useForm} from "react-hook-form";
import "./post.css";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";

const url = "http://localhost:5000/create_user"

const validationUser = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required()
});

function Post () {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(validationUser)
  });
  const addUser = data => axios.post(url, data)
  .then(() => {
    window.alert("Cadastrado!")
  }).catch((err) => {
    console.log("Fudeu, my good: ", err)
  });
  return(
    <div>
      <Header/>
      <main>
        <div className="card-post">
          <h2>Register</h2>
          <div className="card-body-post">
            <form onSubmit={handleSubmit(addUser)}>
              <div className="fields">
                <label>Name</label>
                <input type="text" placeholder="type your name here" name="name" {...register("name")}/>
                <p className="error-message">{errors.name?.message}</p>
              </div>
              <div className="fields">
                <label>E-mail</label>
                <input type="text" placeholder="example@email.com" name="email" {...register("email")}/>
                <p className="error-message">{errors.email?.message}</p>
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