import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Data = () => {
  return (
    <div className="row my-5">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3 px-5 d-flex justify-content-between bg-purple">
            <h4 className="my-0 fw-normal text-white">Manage Employees</h4>
            <Link className='btn btn-success text-white' to='#'><FontAwesomeIcon icon={faCirclePlus} /> ADD</Link>
          </div>
          <div className="card-body">
            <table className="table table-bordered table-striped table-employee">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rizki</td>
                  <td>Rahby</td>
                  <td>rr@gmail.com</td>
                  <td>Jl. jalan</td>
                  <td>0800 0000 0000</td>
                  <td>
                    <i className="fa-solid fa-eye text-primary mx-2"></i>
                    <i className="fa-solid fa-pen-to-square text-warning mx-2"></i>
                    <i className="fa-solid fa-trash-can text-danger mx-2"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Data };
