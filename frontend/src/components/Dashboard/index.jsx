import styles from "./Dashboard.module.css";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import WidgetComp from "../WidgetComp";
import Pots from "../Pots";
import { API_URL } from "../../constants/apiURL";
import Budgets from "../Budgets";
import ContainerComponent from "../ContainerComponent";
import { POTS, BUDGETS, TRANSACTIONS, RECURRING_BILLS } from "../constants";
import Loading from "../Loading";
import TransactionsWidget from "../TransactionsWidget";
import RecurringBills from "../RecurringBills";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [incomeWidget, setIncomeWidget] = useState(0);
  const [expensesWidget, setExpensesWidget] = useState(0);

  const fetchData = async (endPoint) => {
    try {
      const data = await fetch(`${API_URL}/${endPoint}`);
      const result = await data.json();
      return result;
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData("income").then((d) => {
      setIncomeWidget(d[0].income);
    });
    fetchData("expenses").then((d) => {
      setExpensesWidget(d[0].expenses);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.dashboardContainer}>
          <Row>
            <Col md={12}>
              <h1 className={styles.dashboardHeading}>Overview</h1>
            </Col>
          </Row>

          <Row className="gy-5">
            <Col md={4}>
              <WidgetComp
                header="Current Balance"
                value={Number(incomeWidget) - Number(expensesWidget)}
                classStyle="widget-black"
              />
            </Col>
            <Col md={4}>
              <WidgetComp header="Income" value={incomeWidget} />
            </Col>
            <Col md={4}>
              <WidgetComp header="Expenses" value={expensesWidget} />
            </Col>
          </Row>
          <div className={`${styles.masonry}`}>
            <ContainerComponent title={POTS}>
              {(data) => <Pots data={data} />}
            </ContainerComponent>

            <ContainerComponent title={BUDGETS}>
              {(data) => <Budgets data={data} />}
            </ContainerComponent>

            <ContainerComponent title={TRANSACTIONS}>
              {(data) => <TransactionsWidget data={data} />}
            </ContainerComponent>
            <ContainerComponent title={RECURRING_BILLS}>
              {(data) => <RecurringBills data={data} />}
            </ContainerComponent>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
