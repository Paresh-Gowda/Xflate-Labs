import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "#111827",
      padding: 12,
      titleColor: "#ffffff",
      bodyColor: "#e5e7eb",
      displayColors: false,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: "#8b95a5" },
      border: { display: false },
    },
    y: {
      grid: { color: "rgba(148, 163, 184, 0.12)" },
      ticks: { color: "#8b95a5" },
      border: { display: false },
    },
  },
};

function InflationTrend({ monthlyData, cpiData }) {
  const inflationChart = {
    labels: monthlyData.map((item) => item.month),
    datasets: [
      {
        label: "Inflation Rate",
        data: monthlyData.map((item) => item.rate),
        borderColor: "#6475f5",
        backgroundColor: "rgba(100, 117, 245, 0.12)",
        fill: true,
        tension: 0.4,
        borderWidth: 2.5,
        pointRadius: 3,
        pointHoverRadius: 6,
      },
    ],
  };

  const cpiChart = {
    labels: cpiData.map((item) => item.month),
    datasets: [
      {
        label: "Consumer Price Index",
        data: cpiData.map((item) => item.cpi),
        borderColor: "#9b72e8",
        backgroundColor: "rgba(155, 114, 232, 0.12)",
        fill: true,
        tension: 0.4,
        borderWidth: 2.5,
        pointRadius: 3,
        pointHoverRadius: 6,
      },
    ],
  };

  const inflationOptions = {
    ...commonOptions,
    scales: {
      ...commonOptions.scales,
      y: {
        ...commonOptions.scales.y,
        ticks: {
          color: "#8b95a5",
          callback: (value) => `${value}%`,
        },
      },
    },
  };

  return (
    <>
      <section className="inflation-panel">
        <div className="panel-header">
          <div>
            <h3>Inflation Trend</h3>
            <p>Monthly inflation rate over the selected period</p>
          </div>
        </div>

        <div className="chart-container">
          <Line data={inflationChart} options={inflationOptions} />
        </div>
      </section>

      <section className="inflation-panel">
        <div className="panel-header">
          <div>
            <h3>Consumer Price Index</h3>
            <p>Monthly movement in the consumer price index</p>
          </div>
        </div>

        <div className="chart-container">
          <Line data={cpiChart} options={commonOptions} />
        </div>
      </section>
    </>
  );
}

export default InflationTrend;
