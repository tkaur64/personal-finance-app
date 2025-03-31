import { useState, useEffect } from "react";
import AddPotModal from "./AddPotModal";
import PotCard from "./PotCard";
import { API_URL } from "../constants/apiURL";

const PotsScreen = () => {
  const [showNewPost, setShowNewPost] = useState(false);
  const [potData, setPotData] = useState([]);
  const handleAddNewPost = () => {
    setShowNewPost(true);
  };
  const handleClose = () => {
    setShowNewPost(false);
    fetchData();
  };

  const fetchData = async () => {
    const data = await fetch(`${API_URL}/pot_detail`);
    console.log(data);
    const result = await data.json();
    setPotData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="pots-screen-container">
      <h2>Pots</h2>
      <button onClick={handleAddNewPost}>Add new Pot</button>
      {showNewPost ? <AddPotModal handleClose={handleClose} /> : null}
      <div className="pot-card-container">
        {potData.map((pot) => {
          return (
            <PotCard
              pot_name={pot.pot_name}
              money_saved={pot.money_saved}
              target={pot.pots}
            />
          );
        })}
      </div>

      {/* {showNewPost && <h1>Pots</h1>} */}
    </div>
  );
};

export default PotsScreen;
