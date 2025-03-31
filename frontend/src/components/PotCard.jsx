const PotCard = ({ pot_name, money_saved, target }) => {
  return (
    <div className="pot-card">
      <h3>{pot_name}</h3>
      <div className="pot-total-saved">
        <p>Total Saved</p>
        <span>{money_saved}</span>
      </div>

      <span>{target}</span>
    </div>
  );
};

export default PotCard;
