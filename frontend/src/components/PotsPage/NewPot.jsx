import { Modal } from "react-bootstrap";
import styles from "./NewPot.module.css";
import { useState } from "react";
import { API_URL } from "../../constants/apiURL";

const NewPot = ({ hideShowNewPot }) => {
  const [potName, setPotName] = useState("");
  const [potTarget, setPotTarget] = useState("");
  const [potColor, setPotColor] = useState("");

  const handlePotName = (e) => {
    setPotName(e.target.value);
  };

  const handlePotTarget = (e) => {
    setPotTarget(e.target.value);
  };

  const handlePotColor = (e) => {
    setPotColor(e.target.value);
  };

  const handleAddBtnClick = async () => {
    try {
      const res = await fetch(`${API_URL}/pots`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pot_name: potName,
          target: Number(potTarget),
          color: potColor,
        }),
      });
      const data = await res.json();
      if (data.message) {
        hideShowNewPot();
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Modal
      show={true}
      centered={true}
      onHide={hideShowNewPot}
      className={styles.modalContainer}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add New Pot</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <p>
          Create a pot to set savings targets. These can help keep you on track
          as you save for special purchases.
        </p>
        <div className={styles.flexContainer}>
          <label>Pot Name</label>
          <input type="text" value={potName} onChange={handlePotName} />
        </div>
        <div className={styles.flexContainer}>
          <label>Target</label>
          <input type="number" value={potTarget} onChange={handlePotTarget} />
        </div>
        <div className={styles.flexContainer}>
          <label>Theme</label>
          <select value={potColor} onChange={handlePotColor}>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </div>

        <button onClick={handleAddBtnClick}>Add New Pot</button>
      </Modal.Body>
    </Modal>
  );
};
export default NewPot;
