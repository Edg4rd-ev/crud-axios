import React, { useEffect } from "react";
import Header from "../../components/header/Header"
import {useForm} from "react-hook-form";
import {useParams, useNavigate} from 'react-router-dom';
import "../Post/post.css";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";

const validationTeacher = yup.object().shape({
  tx_nome: yup.string().required(),
  tx_telefone: yup.string().required()
});

function Edit () {

  const {id} = useParams();
  const navigate = useNavigate();

  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(validationTeacher)
  });
  useEffect(() => {
    axios.get(`http://localhost:5000/list_by_id/${id}`)
    .then((response) => {
      reset(response.data)
    });
    // eslint-disable-next-line
  }, []);
  const editTeacher = data => axios.patch(`http://localhost:5000/update_teacher/${id}`, data)  
  .then(() => {
    navigate("/");
    window.alert("As alterações foram salvas");
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
            <form onSubmit={handleSubmit(editTeacher)}>
              <div className="fields">
                
                <label>Nome</label>
                
                <input type="text" placeholder="type your name here" name="tx_nome" {...register("tx_nome")}/>
                <p className="error-message">{errors.tx_nome?.message}</p>
              </div>
              <div className="selectFields">
                <div className="fields">
                
                  <label>Titulo</label>
                
                  <select name="id_titulo" {...register("id_titulo")}>
                    <option value="1">Graduado(a)</option>
                    <option value="2">Especialista</option>
                    <option value="3">Mestre(a)</option>
                    <option value="4">Doutor(a)</option>
                    <option value="5">Pós-Doutor(a)</option>
                  </select>
                </div>
                <div className="fields">

                  <label>Sexo</label>

                  <select name="tx_sexo" {...register("tx_sexo")}>
                    <option value="m">masculino</option>
                    <option value="f">feminino</option>
                    <option value="o">outros</option>
                  </select>

                </div>
                <div className="fields">

                  <label>Estado Civil</label>

                  <select name="tx_estado_civil" {...register("tx_estado_civil")}>
                    <option value="s">solteiro</option>
                    <option value="c">casado</option>
                    <option value="p">separado</option>
                    <option value="d">divorciado</option>
                    <option value="v">viúvo</option>
                  </select>
                </div>
              </div>
              <div className="fields">
                <label>Data de Nascimento</label>
                <input type="date" name="dt_nascimento" {...register("dt_nascimento")}></input>
              </div>
              <div className="fields">

                <label>Telefone</label>

                <input type="text" placeholder="type your number" name="tx_telefone" {...register("tx_telefone")}/>
                <p className="error-message">{errors.tx_telefone?.message}</p>

              </div>
              <div className="btn-post">
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Edit;