import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { getEmployeeById } from "../EmployeeService";

const View = props => {
  const { id }= useParams();

  const initialEmployeeState = {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
  };
  
  const [employee, setEmployee] = useState(initialEmployeeState);

  const employeeService = id => {
    getEmployeeById(id)
      .then(response => {
        setEmployee(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
    employeeService(id);
  }, [id]);

  return (
    <div className="row my-5">
      <div className="col-md-6 mx-auto">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3 px-5 d-flex justify-content-between bg-purple">
            <h4 className="my-0 fw-normal text-white">View Employee</h4>
            <Link className='btn btn-success text-white' to='/'><FontAwesomeIcon icon={faCircleArrowLeft} /> Back</Link>
          </div>
          <div className="card-body container">
            <table className="table table-bordered table-striped table-view-employee">
              <tbody>
                <tr>
                  <th>First Name</th>
                  <td>{employee.firstName}</td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td>{employee.lastName}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{employee.email}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{employee.address}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{employee.phone}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export { View };
