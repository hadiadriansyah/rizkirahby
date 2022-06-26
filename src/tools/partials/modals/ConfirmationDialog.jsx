import React from "react";
import { Button, Modal } from "react-bootstrap";

const ConfirmationDialog = (props) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Delete Confirmation
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">Are you sure you want to delete?</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" onClick={props.ondelete} className="btn btn-success" 
              data-bs-dismiss="modal">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
    // <Modal
    //   {...props}
    //   size="md"
    //   aria-labelledby="contained-modal-title-vcenter"
    //   centered
    // >
    //   <Modal.Header closeButton>
    //     <Modal.Title id="contained-modal-title-vcenter">
    //       Delete Confirmation
    //     </Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <h4>Centered Modal</h4>
    //     <p>
    //       Are you sure you want to delete?
    //     </p>
    //   </Modal.Body>
    //   <Modal.Footer>
    //     <Button variant="outline-secondary" onClick={props.onHide}>Close</Button>
    //     <Button variant="success" onClick={props.ondelete}>OK</Button>
    //   </Modal.Footer>
    // </Modal>
  );
};

export { ConfirmationDialog };
