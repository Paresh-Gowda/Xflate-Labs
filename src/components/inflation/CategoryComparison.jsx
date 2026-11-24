import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const chartColors = [
  "#6475f5",
  "#9b72e8",
  "#38bdf8",
  "#34d399",
  "#fbbf24",
  "#fb7185",
];

function CategoryComparison({
  categoryData,
  comparison,
  setComparison,
}) {
  const distributionData = {
    labels: categoryData.map((item) => item.name),
    datasets: [
      {
        data: categoryData.map((item) => item.share),
        backgroundColor: chartColors,
        borderWidth: 0,
        hoverOffset: 7,
      },
    ],
  };

  const comparisonData = {
    labels: categoryData.map((item) => item.name),
    datasets: [
      {
        label: comparison === "category" ? "Inflation Rate" : "Category Share",
        data: categoryData.map((item) =>
          comparison === "category" ? item.rate : item.share
        ),
        backgroundColor: chartColors,
        borderRadius: 7,
        maxBarThickness: 38,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#111827",
        padding: 12,
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
        beginAtZero: true,
        grid: { color: "rgba(148, 163, 184, 0.12)" },
        ticks: {
          color: "#8b95a5",
          callback: (value) =>
            comparison === "category" ? `${value}%` : `${value}%`,
        },
        border: { display: false },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="category-grid">
      <section className="inflation-panel">
        <div className="panel-header">
          <div>
            <h3>Category Distribution</h3>
            <p>Share of the illustrative category basket</p>
          </div>
        </div>

        <div className="doughnut-container">
          <Doughnut data={distributionData} options={doughnutOptions} />
        </div>

        <div className="category-legend">
          {categoryData.map((item, index) => (
            <div className="legend-item" key={item.name}>
              <span
                className="legend-dot"
                style={{ backgroundColor: chartColors[index % chartColors.length] }}
              />
              <span>{item.name}</span>
              <strong>{item.share}%</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="inflation-panel">
        <div className="panel-header category-panel-header">
          <div>
            <h3>Category Comparison</h3>
            <p>Compare inflation rate and category share</p>
          </div>

          <div className="comparison-toggle">
            <button
              className={comparison === "category" ? "active" : ""}
              onClick={() => setComparison("category")}
              type="button"
            >
              Inflation
            </button>
            <button
              className={comparison === "share" ? "active" : ""}
              onClick={() => setComparison("share")}
              type="button"
            >
              Share
            </button>
          </div>
        </div>

        <div className="chart-container">
          <Bar data={comparisonData} options={barOptions} />
        </div>
      </section>
    </div>
  );
}

export default CategoryComparison;
