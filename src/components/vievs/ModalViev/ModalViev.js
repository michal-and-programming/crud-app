import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalViev= ({show, close, deletePost}) => {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>This operation will remove this post from the app</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={close}>Cancel</Button>
          <Button variant="danger" onClick={deletePost}>Remove</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalViev;