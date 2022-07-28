import React from "react";
import Header from "../../components/header/Header"
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./post.css";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";

const url = "http://localhost:5000/create_teacher"

const validationTeacher = yup.object().shape({
  tx_nome: yup.string().required(" * Campo Obrigatório").min(3, " * Nome muito curto!"),
  tx_telefone: yup.string().required(" * Campo Obrigatório").max(9, " * Apenas 9 dígitos!"),
  id_titulo: yup.string().required("*Campo Obrigatório"),
  tx_sexo: yup.string().required("*Campo Obrigatório"),
  tx_estado_civil: yup.string().required("*Campo Obrigatório"),
  dt_nascimento: yup.string().required(" * Campo Obrigatório"),
});
function Post () {
  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(validationTeacher)
  });
  const addTeacher = data => axios.post(url, data)
  .then(() => {
    navigate("/");
    window.alert("Cadastrado!");
  }).catch((err) => {
    console.log("Fudeu, my good: ", err);
  });
  return(
    <div>
      <Header/>
      <main>
        <div className="card-post">
          <h2>Register</h2>
          <div className="card-body-post">
            <form onSubmit={handleSubmit(addTeacher)}>
              <div className="fields">
                
                <label>Nome<span className="error-message">{errors.tx_nome?.message}</span></label>
                
                <input type="text" placeholder="type your name here" name="tx_nome" {...register("tx_nome")}/>
              </div>
              <div className="selectFields">
                <div className="fields">
                  
                  <span className="error-message">{errors.id_titulo?.message}</span>
                  <label>Titulo</label>
                  
                  <select name="id_titulo" {...register("id_titulo")}>
                    <option value="" hidden></option>
                    <option value="1">Graduado(a)</option>
                    <option value="2">Especialista</option>
                    <option value="3">Mestre(a)</option>
                    <option value="4">Doutor(a)</option>
                    <option value="5">Pós-Doutor(a)</option>
                  </select>
                </div>
                <div className="fields">
                  <span className="error-message">{errors.tx_sexo?.message}</span>
                  <label>Sexo</label>
                  
                  <select name="tx_sexo" {...register("tx_sexo")}>
                    <option value="" hidden></option>
                    <option value="m">masculino</option>
                    <option value="f">feminino</option>
                    <option value="o">outros</option>
                  </select>

                </div>
                <div className="fields">

                  <span className="error-message">{errors.tx_estado_civil?.message}</span>
                  <label>Estado Civil</label>
                  
                  <select name="tx_estado_civil" {...register("tx_estado_civil")}>
                    <option value="" hidden></option>
                    <option value="s">solteiro</option>
                    <option value="c">casado</option>
                    <option value="p">separado</option>
                    <option value="d">divorciado</option>
                    <option value="v">viúvo</option>
                  </select>
                </div>
              </div>
              <div className="fields">
                <label>Data de Nascimento<span className="error-message">{errors.dt_nascimento?.message}</span></label>
                <input type="date" name="dt_nascimento" {...register("dt_nascimento")}></input>
              </div>
              <div className="fields">

                <label>Telefone<span className="error-message">{errors.tx_telefone?.message}</span></label>

                <input type="text" placeholder="type your number" name="tx_telefone" {...register("tx_telefone")}/>

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