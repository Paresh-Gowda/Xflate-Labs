import { useMemo, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line, Bar, Doughnut } from "react-chartjs-2";

import {
  TrendingUp,
  TrendingDown,
  Activity,
  Percent,
  CalendarDays,
  ArrowUpRight,
  ArrowDownRight,
  Info,
  BarChart3,
  RefreshCw,
} from "lucide-react";

import "../styles/Inflation.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler
);

// Illustrative data only. Replace with verified datasets later.
const monthlyData = [
  { month: "Jan", rate: 5.1, cpi: 181.2 },
  { month: "Feb", rate: 4.8, cpi: 181.8 },
  { month: "Mar", rate: 4.6, cpi: 182.5 },
  { month: "Apr", rate: 4.9, cpi: 183.1 },
  { month: "May", rate: 4.5, cpi: 183.8 },
  { month: "Jun", rate: 4.2, cpi: 184.3 },
  { month: "Jul", rate: 4.4, cpi: 184.9 },
  { month: "Aug", rate: 4.7, cpi: 185.2 },
  { month: "Sep", rate: 4.3, cpi: 185.6 },
  { month: "Oct", rate: 4.1, cpi: 185.8 },
  { month: "Nov", rate: 4.5, cpi: 186.0 },
  { month: "Dec", rate: 4.85, cpi: 186.2 },
];

const categoryData = [
  { name: "Food", rate: 5.2, share: 32 },
  { name: "Fuel", rate: 3.8, share: 18 },
  { name: "Housing", rate: 6.4, share: 20 },
  { name: "Electronics", rate: 2.1, share: 8 },
  { name: "Personal", rate: 4.1, share: 15 },
  { name: "Other", rate: 3.4, share: 7 },
];

const periodOptions = [
  { label: "3M", value: 3 },
  { label: "6M", value: 6 },
  { label: "9M", value: 9 },
  { label: "12M", value: 12 },
];

function MetricCard({ title, value, change, icon: Icon, trend }) {
  return (
    <div className="inflation-metric">
      <div className="inflation-metric-top">
        <span>{title}</span>
        <div className="inflation-metric-icon">
          <Icon size={19} />
        </div>
      </div>

      <h2>{value}</h2>

      <div className={`inflation-metric-change ${trend}`}>
        {trend === "down" ? (
          <ArrowDownRight size={15} />
        ) : (
          <ArrowUpRight size={15} />
        )}
        <span>{change}</span>
      </div>
    </div>
  );
}

function Inflation() {
  const [period, setPeriod] = useState(12);
  const [comparison, setComparison] = useState("category");

  const filteredData = useMemo(
    () => monthlyData.slice(-period),
    [period]
  );

  const first = filteredData[0];
  const last = filteredData[filteredData.length - 1];

  const rateChange = last.rate - first.rate;

  const lineData = {
    labels: filteredData.map((item) => item.month),
    datasets: [
      {
        label: "Inflation Rate",
        data: filteredData.map((item) => item.rate),
        borderColor: "#367FE8",
        backgroundColor: "rgba(54,127,232,0.10)",
        fill: true,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 6,
      },
    ],
  };

  const cpiData = {
    labels: filteredData.map((item) => item.month),
    datasets: [
      {
        label: "CPI Index",
        data: filteredData.map((item) => item.cpi),
        borderColor: "#19A98A",
        backgroundColor: "rgba(25,169,138,0.08)",
        fill: true,
        tension: 0.4,
        pointRadius: 2,
      },
    ],
  };

  const comparisonData = {
    labels: categoryData.map((item) => item.name),
    datasets: [
      {
        label:
          comparison === "category"
            ? "Inflation Rate (%)"
            : "Illustrative Category Share (%)",
        data: categoryData.map((item) =>
          comparison === "category" ? item.rate : item.share
        ),
        backgroundColor: [
          "#367FE8",
          "#18A98A",
          "#E6A34B",
          "#9B85E8",
          "#E87991",
          "#83A2C7",
        ],
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  };

  const doughnutData = {
    labels: categoryData.map((item) => item.name),
    datasets: [
      {
        data: categoryData.map((item) => item.share),
        backgroundColor: [
          "#367FE8",
          "#18A98A",
          "#E6A34B",
          "#9B85E8",
          "#E87991",
          "#83A2C7",
        ],
        borderWidth: 3,
        borderColor: "#ffffff",
        hoverOffset: 7,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
      },
      y: {
        border: { display: false },
        grid: { color: "#EDF0F5" },
        ticks: {
          callback: (value) => `${value}%`,
        },
      },
    },
  };

  const cpiOptions = {
    ...lineOptions,
    scales: {
      ...lineOptions.scales,
      y: {
        border: { display: false },
        grid: { color: "#EDF0F5" },
      },
    },
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: { color: "#EDF0F5" },
        beginAtZero: true,
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "72%",
    plugins: {
      legend: { display: false },
    },
  };

  const insights = [
    {
      title: "Highest category movement",
      value: [...categoryData].sort((a, b) => b.rate - a.rate)[0].name,
      description: "has the highest illustrative price change.",
      icon: TrendingUp,
    },
    {
      title: "Lowest category movement",
      value: [...categoryData].sort((a, b) => a.rate - b.rate)[0].name,
      description: "has the lowest illustrative price change.",
      icon: TrendingDown,
    },
    {
      title: "Inflation direction",
      value:
        rateChange > 0
          ? "Increasing"
          : rateChange < 0
            ? "Decreasing"
            : "Unchanged",
      description: `A ${Math.abs(rateChange).toFixed(2)} percentage-point change across the selected sample.`,
      icon: Activity,
    },
  ];

  return (
    <div className="page inflation-page">

      {/* HEADER */}
      <div className="inflation-header">
        <div>
          <span className="eyebrow">
            ECONOMIC INTELLIGENCE / ANALYTICS
          </span>

          <h1>Inflation Intelligence</h1>

          <p>
            Analyze inflation patterns, compare economic indicators
            and explore category-wise price movements.
          </p>
        </div>

        <div className="inflation-live-label">
          <span />
          Analytical Workspace
        </div>
      </div>

      {/* FILTERS */}
      <div className="inflation-toolbar">
        <div className="inflation-toolbar-label">
          <CalendarDays size={17} />
          Analysis Period
        </div>

        <div className="period-options">
          {periodOptions.map((option) => (
            <button
              key={option.value}
              className={period === option.value ? "selected" : ""}
              onClick={() => setPeriod(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="sample-label">
          <RefreshCw size={14} />
          Sample dataset
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="inflation-metrics-grid">
        <MetricCard
          title="Inflation Rate"
          value={`${last.rate.toFixed(2)}%`}
          change="Latest sample"
          icon={TrendingUp}
          trend="up"
        />

        <MetricCard
          title="Consumer Price Index"
          value={last.cpi.toFixed(1)}
          change="Latest sample"
          icon={BarChart3}
          trend="up"
        />

        <MetricCard
          title="Repo Rate"
          value="6.50%"
          change="Illustrative value"
          icon={Percent}
          trend="neutral"
        />

        <MetricCard
          title="Period Change"
          value={`${rateChange > 0 ? "+" : ""}${rateChange.toFixed(2)} pp`}
          change="First to latest sample"
          icon={Activity}
          trend={rateChange > 0 ? "up" : "down"}
        />
      </div>

      {/* INFLATION TREND */}
      <section className="inflation-panel">
        <div className="inflation-panel-heading">
          <div>
            <h2>Inflation Rate Trend</h2>
            <p>Monthly inflation movement over the selected period.</p>
          </div>

          <span className="chart-tag">Monthly Analysis</span>
        </div>

        <div className="inflation-main-chart">
          <Line data={lineData} options={lineOptions} />
        </div>
      </section>

      {/* CPI + DOUGHNUT */}
      <div className="inflation-charts-grid">

        <section className="inflation-panel">
          <div className="inflation-panel-heading">
            <div>
              <h2>Consumer Price Index</h2>
              <p>Monthly CPI index movement.</p>
            </div>

            <span className="chart-tag green">CPI</span>
          </div>

          <div className="inflation-secondary-chart">
            <Line data={cpiData} options={cpiOptions} />
          </div>
        </section>

        <section className="inflation-panel">
          <div className="inflation-panel-heading">
            <div>
              <h2>Category Distribution</h2>
              <p>Illustrative category share.</p>
            </div>
          </div>

          <div className="inflation-doughnut">
            <Doughnut data={doughnutData} options={doughnutOptions} />

            <div className="doughnut-center">
              <strong>100%</strong>
              <span>Sample share</span>
            </div>
          </div>

          <div className="inflation-legend">
            {categoryData.map((item, index) => (
              <div key={item.name}>
                <span className={`legend-dot legend-${index}`} />
                <span>{item.name}</span>
                <strong>{item.share}%</strong>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CATEGORY COMPARISON */}
      <section className="inflation-panel">
        <div className="inflation-panel-heading">
          <div>
            <h2>Category-wise Comparison</h2>
            <p>Compare price changes and illustrative category shares.</p>
          </div>

          <div className="comparison-toggle">
            <button
              className={comparison === "category" ? "selected" : ""}
              onClick={() => setComparison("category")}
            >
              Inflation
            </button>

            <button
              className={comparison === "share" ? "selected" : ""}
              onClick={() => setComparison("share")}
            >
              Share
            </button>
          </div>
        </div>

        <div className="inflation-secondary-chart">
          <Bar data={comparisonData} options={barOptions} />
        </div>
      </section>

      {/* ECONOMIC INSIGHTS */}
      <section className="inflation-panel">
        <div className="inflation-panel-heading">
          <div>
            <h2>Analytical Insights</h2>
            <p>Observations generated from the displayed sample data.</p>
          </div>
        </div>

        <div className="inflation-insights-grid">
          {insights.map((item) => {
            const Icon = item.icon;

            return (
              <div className="inflation-insight-card" key={item.title}>
                <div className="insight-icon">
                  <Icon size={19} />
                </div>

                <span>{item.title}</span>
                <h3>{item.value}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* DISCLAIMER */}
      <div className="inflation-disclaimer">
        <Info size={18} />

        <p>
          <strong>Data disclaimer:</strong> All values and category
          distributions currently displayed are illustrative sample
          data for frontend development. They do not represent
          verified official Indian economic statistics. CPI, Repo
          Rate and category weights will be integrated from
          appropriate official sources in a later phase.
        </p>
      </div>

    </div>
  );
}

export default Inflation;
