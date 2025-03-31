import { useEffect, useState } from "react";
import styles from "./PotsPage.module.css";
import { Col, Row } from "react-bootstrap";
import Loading from "../Loading";
import { API_URL } from "../../constants/apiURL";
import PotsBox from "./PotsBox";
import NewPot from "./NewPot";

const PotsPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAddNewBtn, setShowAddNewBtn] = useState(false);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(`${API_URL}/pot_detail`);
      const result = await data.json();
      setData(result);
    } catch (e) {
      console.error(e);
      setData([]);
    } finally {
      setIsLoading(false);
    }
  };
  const handleAddPotBtn = () => {
    setShowAddNewBtn(true);
  };

  const handleHideShowNewPot = () => {
    setShowAddNewBtn(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (!showAddNewBtn) {
      fetchData();
    }
  }, [showAddNewBtn]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.potsContainer}>
          <Row>
            <Col md={9}>
              <h1 className={styles.potsPageHeading}>Pots</h1>
            </Col>
            <Col md={3}>
              <button className={styles.addNewPotBtn} onClick={handleAddPotBtn}>
                + Add New Pot
              </button>
            </Col>
          </Row>
          <Row>
            <div className={styles.potsBoxContainer}>
              {data.map((d) => {
                return (
                  <PotsBox
                    pot_name={d.pot_name}
                    money_saved={d.money_saved}
                    target={d.pots}
                    color={d.color}
                  />
                );
              })}
            </div>
          </Row>
        </div>
      )}
      {showAddNewBtn && <NewPot hideShowNewPot={handleHideShowNewPot} />}
    </>
  );
};

export default PotsPage;
