import Badge from "../Badge";
import styles from "./Budgets.module.css";

const Budgets = ({ data }) => {
  return (
    <div className={styles.budgetContainer}>
      <div>Chart will go here</div>
      <div className={styles.badgeContainer}>
        {data.map((b) => (
          <Badge
            key={b.category}
            header={b.category}
            value={b.category_limit_amount}
            color={b.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Budgets;
