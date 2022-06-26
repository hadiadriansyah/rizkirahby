import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SuccessToast = props => {
  return (
    <div className="position-relative">
      <div className="position-fixed top-0 end-0 p-3">
        <div
          className={"toast " + props.show + " align-items-center text-white bg-success border-0"}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body d-flex align-items-center">
              <FontAwesomeIcon icon={faCheck} className="fs-3 me-2"/>
              <span>{props.message} <br/> successfully</span>
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SuccessToast };
