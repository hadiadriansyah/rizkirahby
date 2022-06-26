import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { ConfirmationDialog } from "../../../../tools/partials/modals/ConfirmationDialog";
import { SuccessToast } from "../../../../tools/partials/toasts/SuccessToast";
import { deleteEmployee, getEmployee } from "../EmployeeService";

const Data = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  const employeeService = () => {
    getEmployee()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const [modalShow, setModalShow] = useState(false);

  const [toastShow, setToastShow] = useState("hide");
  const [toastMessage, setToastMessage] = useState("");

  const [idEmployee, setIdEmployee] = useState(null);

  const handleRemove = (idEmployee) => {
    setModalShow(true);
    setIdEmployee(idEmployee);
  };

  const onDelete = () => {
    deleteEmployee(idEmployee)
      .then((response) => {
        setModalShow(false);
        setToastShow("show");
        setToastMessage("Employee was deleted");
        employeeService();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (location.state && location.state.add === "success") {
      setToastShow("show");
      setToastMessage("Employee was added");

      navigate(location.pathname, {});
    }
    employeeService();
  }, []);

  return (
    <div className="row my-5">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3 px-5 d-flex justify-content-between bg-purple">
            <h4 className="my-0 fw-normal text-white">Manage Employees</h4>
            <Link className="btn btn-success text-white" to="/employees/add">
              <FontAwesomeIcon icon={faCirclePlus} /> ADD
            </Link>
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
                {employees &&
                  employees.map((employee, index) => (
                    <tr key={index}>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.email}</td>
                      <td>{employee.address}</td>
                      <td>{employee.phone}</td>
                      <td>
                        <Link to={"/employees/" + employee.id}>
                          <FontAwesomeIcon
                            icon={faEye}
                            className="btn text-primary"
                          />
                        </Link>
                        <Link to={"/employees/update/" + employee.id}>
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            className="btn text-warning"
                          />
                        </Link>
                        {/* <FontAwesomeIcon
                          icon={faTrashCan}
                          className="btn text-danger"
                          onClick={() => {
                            handleRemove(employee.id);
                          }}
                        /> */}
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          className="btn text-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => {
                            handleRemove(employee.id);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ConfirmationDialog
        // show={modalShow}
        ondelete={onDelete}
        // onHide={() => setModalShow(false)}
      />
      <SuccessToast show={toastShow} message={toastMessage} />
    </div>
  );
};

export { Data };
