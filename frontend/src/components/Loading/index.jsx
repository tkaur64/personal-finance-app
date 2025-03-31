import Spinner from "react-bootstrap/Spinner";
import styles from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
      <Spinner size="lg" className={styles.spinnerBorder} />
      <span className={styles.loadingText}>Loading...</span>
    </div>
  );
};

export default Loading;
