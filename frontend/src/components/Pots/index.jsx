import styles from "./Pots.module.css";
import DollarPots from "../Icons/DollarPots";
import Badge from "../Badge";

const Pots = ({ data }) => {
  const calculateSum = (arr) => {
    return arr.reduce((acc, curr) => acc + curr.pots, 0);
  };
  return (
    <div className={styles.potsContainer}>
      <div className={styles.potsWidget}>
        <DollarPots />
        <div>
          <p className={styles.potsWidgetTitle}>Total Saved</p>
          <p className={styles.potsWidgetValue}>
            ₹ {new Intl.NumberFormat("en-IN").format(calculateSum(data))}
          </p>
        </div>
      </div>
      {data.map((p, index) => (
        <Badge key={index} header={p.pot_name} value={p.pots} color={p.color} />
      ))}
    </div>
  );
};

export default Pots;
