import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Badge from "./Badge";

const options = {
  chart: {
    type: "pie",
  },
  legend: {
    enabled: false,
  },

  series: [
    {
      name: "Registrations",
      colorByPoint: true,
      innerSize: "75%",
      data: [
        {
          name: "EV",
          y: 23.9,
        },
        {
          name: "Hybrids",
          y: 12.6,
        },
        {
          name: "Diesel",
          y: 37.0,
        },
        {
          name: "Petrol",
          y: 26.4,
        },
      ],
    },
  ],
};
const data_updated = [
  { name: "Groceries", y: 1000 },
  { name: "Entertainment", y: 5000 },
];
options.series[0].data = data_updated;
console.log(options);

const ChartComponent = () => {
  return (
    <div className="chart-body">
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div className="budget-badge-container">
        <Badge header="Groceries" value={1000} />
        <Badge header="Entertainment" value={5000} />
        <Badge header="Education" value={2000} />
      </div>
    </div>
  );
};

export default ChartComponent;
