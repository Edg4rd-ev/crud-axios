import React, {useState, useEffect} from "react";
import HeaderMain from "../../components/headerMain/HeaderMain";
import {HiPencil, HiTrash} from "react-icons/hi";
import "./teacher_list.css";
import {Link} from 'react-router-dom';
import axios from "axios";

const url = "http://localhost:5000/list_teacher";
const url2 = "https://pcn662vet2.execute-api.us-east-1.amazonaws.com/dev/titulo"

function TeacherList () {

  const [teachers, setTeacher] = useState([]);
  const [titles, setTitles] = useState([]);
  
  useEffect(() => {
    axios.get(url) 
    .then(response => {
      setTeacher(response.data.teacher)
    }).catch((err) => {
      console.log("Fudeu, my good: ", err)
    })
  }, []);
  useEffect(() => {
    axios.get(url2) 
    .then(response => {
      setTitles(response.data.data);
    }).catch((err) => {
      console.log("Fudeu, my good: ", err);
    })
  }, []);

  function deleteTeacher(id, nome){
    const confirm = window.confirm(`Tem certeza que deseja excluir o(a) professor(a): ${nome}`);
    if (confirm === true) {      
      axios.delete(`http://localhost:5000/delete_teacher/${id}`)
      setTeacher(teachers.filter(teacher => teacher.id_professor !== id))
    }
  }
  
  //Formatando os dados antes de exibir
  function dateFormat(date){
    const dateToFormat = new Date(date);
    const dateFormated = ((dateToFormat.getDate() )) + "/" + ((dateToFormat.getMonth() + 1)) + "/" + dateToFormat.getFullYear(); 
    return dateFormated;
  }
  function completeSexo(sexo){
    const sex = [{ id: "m", nome: "Masculino" }, { id: "f", nome: "Feminino" },{ id: "o", nome: "Outros" }];
    var sexName = "";
    sex.forEach((objSexo) => {
      if (objSexo.id === sexo) {
        sexName = objSexo.nome
      }
    });
    return sexName;
  }
  function completeEstadoCivil(estadoCivil){
    const maritalStatus = [{ id: "s", nome: "Solteiro(a)" }, { id: "c", nome: "Casado(a)" },{ id: "p", nome: "Separado(a)" }, { id: "d", nome: "Divorciado(a)" }, { id: "v", nome: "Viúvo(a)" }];
    var maritalStatusName = "";
    maritalStatus.forEach((objMaritalStatus) => {
      if (objMaritalStatus.id === estadoCivil) {
        maritalStatusName = objMaritalStatus.nome
      }
    });
    return maritalStatusName;
  }

  return(
    <div>
      <HeaderMain/>

      <main>
        <div className="table">
          <h2>Teachers</h2>
          <div className="table-data">
            <table>
              <thead>
                <tr>
                  <th>code</th>
                  <th>name</th>
                  <th>title</th>
                  <th>sexo</th>
                  <th>estado civil</th>
                  <th>data de nascimento</th>
                  <th>telephone</th>
                  <th>edit</th>
                  <th>delete</th>
                </tr>
              </thead>
              <tbody>
                {teachers?.map((data) => {
                  var title = '';
                  titles.forEach((objTitle) => {
                    if (objTitle.id_titulo === data.id_titulo) {
                      title = objTitle.tx_descricao;
                    }
                  })
                  return (
                    <tr key={data.id_professor}>
                    <td>{data.id_professor}</td>
                    <td>{data.tx_nome}</td>
                    <td>{title !== '' && title}</td>
                    <td>{completeSexo(data.tx_sexo)}</td>
                    <td>{completeEstadoCivil(data.tx_estado_civil)}</td>
                    <td>{dateFormat(data.dt_nascimento)}</td>
                    <td>{data.tx_telefone}</td>
                    <td className="td-edit">
                      <Link to={{pathname: `/edit/${data.id_professor}`}}>
                        <button className="btn btn-edit"><HiPencil/></button>
                      </Link>
                    </td>
                    <td className="td-delete">
                        <button className="btn btn-delete" onClick={() => deleteTeacher(data.id_professor, data.tx_nome)}><HiTrash/></button>
                    </td>
                  </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
export default TeacherList;