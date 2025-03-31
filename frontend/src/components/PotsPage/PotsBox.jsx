import styles from "./PotsBox.module.css";
const PotsBox = ({ pot_name, money_saved, target, color }) => {
  return (
    <div className={styles.potsBox}>
      <div>
        <h3 className={styles.potsHeading}>{pot_name}</h3>
      </div>
      <div className={styles.potsSavedContainer}>
        <p className={styles.potsTotalSaved}>Total Saved</p>
        <p className={styles.potsTotalSavedValue}>
          {" "}
          ₹ {new Intl.NumberFormat("en-IN").format(money_saved)}
        </p>
      </div>
      <div className={styles.potsProgressBar}>
        <div
          style={{
            width: `${(money_saved / target) * 100}%`,
            backgroundColor: color,
          }}
          className={styles.potsFilledProgressBar}
        ></div>
      </div>
      <div className={styles.potsTargetContainer}>
        <p>{`${Math.round((money_saved / target) * 100, 2)}%`}</p>
        <p className={styles.potsTargetValue}>
          Target of ₹ {new Intl.NumberFormat("en-IN").format(target)}
        </p>
      </div>
      <div className={styles.actionButtons}>
        <button>+ Add Money</button>
        <button>Withdraw</button>
      </div>
    </div>
  );
};
export default PotsBox;
