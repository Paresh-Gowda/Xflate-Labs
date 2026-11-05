import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { inflationData } from "../../data/mockData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

function InflationChart() {
  const data = {
    labels: inflationData.map((item) => item.month),
    datasets: [
      {
        label: "Inflation Rate",
        data: inflationData.map((item) => item.inflation),
        borderColor: "#367FE8",
        backgroundColor: "rgba(54, 127, 232, 0.10)",
        fill: true,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        grid: { color: "#EDF0F5" },
        ticks: { callback: (value) => `${value}%` },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default InflationChart;