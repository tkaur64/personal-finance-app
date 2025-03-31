import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { API_URL } from "../constants/apiURL";

const AddPotModal = ({ handleClose }) => {
  const [potName, setPotName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");

  const handlePotNameChange = (e) => {
    setPotName(e.target.value);
  };

  const handleTargetChange = (e) => {
    setTargetAmount(Number(e.target.value));
  };

  const handleSubmitClick = async () => {
    const data = await fetch(`${API_URL}/pots`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pot_name: potName,
        target: targetAmount,
      }),
    });
    const result = await data.json();
    if (result.message === "Configuration Saved!") {
      handleClose();
    }
  };

  return (
    <Modal show={true} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Pot</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Choose a category to set a spending budget. These categories can help
          you monitor spending.
        </p>
        <label>Pot Name</label>
        <input value={potName} onChange={handlePotNameChange} />
        <label>Target Amount</label>
        <input
          type="number"
          value={targetAmount}
          onChange={handleTargetChange}
        />
        <button onClick={handleSubmitClick}>Submit</button>
      </Modal.Body>
    </Modal>
  );
};

export default AddPotModal;
