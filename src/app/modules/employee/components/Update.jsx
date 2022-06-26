import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { getEmployeeById, updateEmployee } from "../EmployeeService";
import { SuccessToast } from "../../../../tools/partials/toasts/SuccessToast";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const initialEmployeeState = {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
  };

  const [employee, setEmployee] = useState(initialEmployeeState);

  const [toastShow, setToastShow] = useState("hide");
  const [toastMessage, setToastMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const saveEmployee = () => {
    var data = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      address: employee.address,
      phone: employee.phone,
    };

    console.log(data);

    updateEmployee(id, data)
      .then((response) => {
        setEmployee({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          address: response.data.address,
          phone: response.data.phone,
        });
        setToastShow("show");
        setToastMessage("Employee was updated");
        navigate("/", { state: { add: "success" } });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const employeeService = (id) => {
    getEmployeeById(id)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id) employeeService(id);
  }, [id]);
  return (
    <>
      <div className="row my-5">
        <div className="col-md-6 mx-auto">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3 px-5 d-flex justify-content-between bg-purple">
              <h4 className="my-0 fw-normal text-white">Update Employee</h4>
              <Link className="btn btn-success text-white" to="/">
                <FontAwesomeIcon icon={faCircleArrowLeft} /> Back
              </Link>
            </div>
            <div className="card-body">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  saveEmployee();
                }}
                className="container"
              >
                <div className="row mb-3">
                  <label
                    htmlFor="firstName"
                    className="col-sm-3 col-md-5 col-form-label"
                  >
                    First Name <small className="text-danger">*</small>
                  </label>
                  <div className="col-sm-9 col-md-7">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      required
                      value={employee.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="lastName"
                    className="col-sm-3 col-md-5 col-form-label"
                  >
                    Last Name <small className="text-danger">*</small>
                  </label>
                  <div className="col-sm-9 col-md-7">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      required
                      value={employee.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="email"
                    className="col-sm-3 col-md-5 col-form-label"
                  >
                    Email <small className="text-danger">*</small>
                  </label>
                  <div className="col-sm-9 col-md-7">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                      value={employee.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="address"
                    className="col-sm-3 col-md-5 col-form-label"
                  >
                    Address <small className="text-danger">*</small>
                  </label>
                  <div className="col-sm-9 col-md-7">
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      required
                      value={employee.address}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="phone"
                    className="col-sm-3 col-md-5 col-form-label"
                  >
                    Phone <small className="text-danger">*</small>
                  </label>
                  <div className="col-sm-9 col-md-7">
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      required
                      value={employee.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <SuccessToast show={toastShow} message={toastMessage} />
    </>
  );
};

export { Update };
