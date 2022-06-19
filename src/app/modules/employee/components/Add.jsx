import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Add = () => {
  return (
    <div className="row my-5">
      <div className="col-md-6 mx-auto">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3 px-5 d-flex justify-content-between bg-purple">
            <h4 className="my-0 fw-normal text-white">New Employees</h4>
            <Link className="btn btn-success text-white" to="#">
              <FontAwesomeIcon icon={faCircleArrowLeft} /> Back
            </Link>
          </div>
          <div className="card-body">
            <form className="container">
              <div className="row mb-3">
                <label htmlFor="firstName" className="col-sm-3 col-md-5 col-form-label">
                  First Name <small className="text-danger">*</small>
                </label>
                <div className="col-sm-9 col-md-7">
                  <input type="text" className="form-control" id="firstName" />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="lastName" className="col-sm-3 col-md-5 col-form-label">
                  Last Name <small className="text-danger">*</small>
                </label>
                <div className="col-sm-9 col-md-7">
                  <input type="text" className="form-control" id="lastName" />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="email" className="col-sm-3 col-md-5 col-form-label">
                  Email <small className="text-danger">*</small>
                </label>
                <div className="col-sm-9 col-md-7">
                  <input type="email" className="form-control" id="email" />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="address" className="col-sm-3 col-md-5 col-form-label">
                  Address <small className="text-danger">*</small>
                </label>
                <div className="col-sm-9 col-md-7">
                  <input type="text" className="form-control" id="address" />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="phone" className="col-sm-3 col-md-5 col-form-label">
                  Phone <small className="text-danger">*</small>
                </label>
                <div className="col-sm-9 col-md-7">
                  <input type="text" className="form-control" id="phone" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Add };
