import styles from "./NavBar.module.css";
import FinanceAppIcon from "../Icons/FinanceAppIcon";
import HomeIcon from "../Icons/HomeIcon";
import Transactions from "../Icons/Transactions";
import Budget from "../Icons/Budget";
import Pots from "../Icons/Pots";
import RecurringBills from "../Icons/RecurringBills";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className={styles.navbarContainer}>
      <FinanceAppIcon color="white" />
      <div className={styles.navbarSubContainer}>
        <div className={styles.navbarItem} onClick={() => navigate("/")}>
          <HomeIcon color="#B3B3B3" />
          <span>Overview</span>
        </div>
        <div
          className={styles.navbarItem}
          onClick={() => navigate("/transactions")}
        >
          <Transactions color="#B3B3B3" />
          <span>Transactions</span>
        </div>
        <div className={styles.navbarItem} onClick={() => navigate("/budgets")}>
          <Budget color="#B3B3B3" />
          <span>Budgets</span>
        </div>
        <div className={styles.navbarItem} onClick={() => navigate("/pots")}>
          <Pots color="#B3B3B3" />
          <span>Pots</span>
        </div>
        <div
          className={styles.navbarItem}
          onClick={() => navigate("/recurring-bills")}
        >
          <RecurringBills color="#B3B3B3" />
          <span>Recurring Bills</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
