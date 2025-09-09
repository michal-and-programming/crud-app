import Modal from "react-bootstrap/Modal";
import Button from '../../common/Button/Button';

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
          <Button className="btn btn-secondary" onClick={close}>Cancel</Button>
          <Button className="btn btn-danger" onClick={deletePost}>Remove</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalViev;