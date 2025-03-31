import styles from "./TransactionsWidget.module.css";
const TransactionsWidget = ({ data }) => {
  return (
    <ul className={styles.transactionList}>
      {data.slice(0, 5).map((d) => {
        return (
          <li className={styles.transactionItem}>
            <p className={styles.transactionName}>{d.transaction}</p>
            <div className={styles.transactionDateAmount}>
              <p
                className={`${styles.transactionAmt} ${
                  d.amount >= 0 ? styles.transactionAmtGreen : ""
                }`}
              >
                {`${d.amount > 0 ? "+" : "-"}₹${new Intl.NumberFormat(
                  "en-IN"
                ).format(Math.abs(d.amount))}`}
              </p>
              <p className={styles.transactionDate}>
                {d.date_of_transaction.replaceAll("-", " ")}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TransactionsWidget;
