import styles from "./Badge.module.css";
const Badge = ({ header, value, color }) => {
  return (
    <div className={styles.badgeApp}>
      <div
        className={styles.badgeAppBorder}
        style={{ backgroundColor: color }}
      ></div>
      <div className={styles.badgeAppCntent}>
        <p className={styles.badgeAppHeader}>{header}</p>
        <p className={styles.badgeAppValue}>
          ₹ {new Intl.NumberFormat("en-IN").format(value)}
        </p>
      </div>
    </div>
  );
};

export default Badge;
