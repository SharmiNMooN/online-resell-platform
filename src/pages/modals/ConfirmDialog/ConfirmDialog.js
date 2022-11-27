import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ConfirmDialog(props) {
  const { title, handler, userId } = props;
  console.log({ context: ConfirmDialog.name, title, handler });

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button
          className="btn btn-danger"
          onClick={() => {
            props.handler(userId);
            props.onHide();
          }}
        >
          YES
        </Button>
        <Button onClick={props.onHide}>NO</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ConfirmDialog;
