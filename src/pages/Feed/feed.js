import React, {useState, useEffect} from "react";
import HeaderMain from "../../components/headerMain/HeaderMain";
import {HiPencil, HiTrash} from "react-icons/hi";
import "./feed.css";
import {Link} from 'react-router-dom';
import axios from "axios";

const url = "http://localhost:5000/list_user";

function Feed () {

  const [users, setUser] = useState([]);

  useEffect(() => {
    axios.get(url) 
    .then(response => {
      setUser(response.data.user)
    }).catch((err) => {
      console.log("Fudeu, my good: ", err)
    })
  }, []);

  return(
    <div>
      <HeaderMain/>

      <main>
        <div className="table">
          <h2>Users</h2>
          <div className="table-data">
            <table>
              <thead>
                <tr>
                  <th>código</th>
                  <th>user</th>
                  <th>e-mail</th>
                  <th>edit</th>
                  <th>delete</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((users)=>(
                  <tr key={users.id}>
                    <td>{users.id}</td>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td className="td-edit">
                      <Link to={"/edit"}>
                        <button className="btn btn-edit"><HiPencil/></button>
                      </Link>
                    </td>
                    <td className="td-delete">
                        <button className="btn btn-delete"><HiTrash/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Feed;