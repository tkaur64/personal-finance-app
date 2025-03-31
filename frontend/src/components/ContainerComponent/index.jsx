import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constants/apiURL";
import styles from "./ContainerComponent.module.css";
import { useEffect, useState } from "react";
import Loading from "../Loading";

const ContainerComponent = ({ children, title }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(
        `${API_URL}/${title.replace("-", "").toLowerCase()}`
      );
      const result = await data.json();
      setData(result);
    } catch (e) {
      console.error(e);
      setData([]);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={`${styles.chartContainer} ${styles[title.toLowerCase()]}`}>
      <div className={styles.headerContainer}>
        <h3 className={styles.header}>{title}</h3>
        <span
          onClick={() => navigate(`/${title.toLowerCase()}`)}
          className={styles.link}
        >
          See Details
        </span>
      </div>
      {isLoading ? <Loading /> : children(data)}
    </div>
  );
};
export default ContainerComponent;
