import styles from "./RecurringBills.module.css";
const RecurringBills = ({ data }) => {
  const totalBills = data.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  const paidBills = data
    .filter((d) => {
      return d.due_date <= 10;
    })
    .reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);
  const dueSoon = totalBills - paidBills;

  return (
    <>
      <div className={`${styles.recurringBillsWidget} ${styles.green}`}>
        <p className={styles.recurringBillsTitle}>Total Bills</p>
        <p className={styles.recurringBillsValue}>
          {" "}
          ₹ {new Intl.NumberFormat("en-IN").format(totalBills)}
        </p>
      </div>
      <div className={`${styles.recurringBillsWidget} ${styles.yellow}`}>
        <p className={styles.recurringBillsTitle}>Paid Bills</p>
        <p className={styles.recurringBillsValue}>
          {" "}
          ₹ {new Intl.NumberFormat("en-IN").format(paidBills)}
        </p>
      </div>
      <div className={`${styles.recurringBillsWidget} ${styles.cyan}`}>
        <p className={styles.recurringBillsTitle}>Due Soon</p>
        <p className={styles.recurringBillsValue}>
          {" "}
          ₹ {new Intl.NumberFormat("en-IN").format(dueSoon)}
        </p>
      </div>
    </>
  );
};

export default RecurringBills;
