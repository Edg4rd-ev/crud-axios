import React from "react";
import HeaderMain from "../../components/headerMain/HeaderMain";
import {HiPencil, HiTrash} from "react-icons/hi";
import "./feed.css";
import {Link} from 'react-router-dom';

function Feed () {
  return(
    <div>
      <HeaderMain/>

      <main>
        <div className="table-data">
          <h2>Users</h2>
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
              <tr>
                <td>1</td>
                <td>Edgar</td>
                <td>edgato@gmail.com</td>
                <td className="td-edit">
                  <Link to={"/edit"}>
                    <button className="btn btn-edit"><HiPencil/></button>
                  </Link>
                </td>
                <td className="td-delete">
                    <button className="btn btn-delete"><HiTrash/></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
export default Feed;