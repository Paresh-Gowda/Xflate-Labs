import { useMemo, useState } from "react";
import {
  Activity,
  Percent,
  TrendingUp,
  BarChart3,
  CalendarDays,
  RefreshCw,
  Info,
} from "lucide-react";

import MetricCard from "../components/inflation/MetricCard";
import InflationTrend from "../components/inflation/InflationTrend";
import CategoryComparison from "../components/inflation/CategoryComparison";

import {
  monthlyInflationData,
  inflationCategoryData,
  inflationPeriodOptions,
  inflationDataSource,
} from "../data/inflationData";

import {
  monthlyCpiData,
} from "../data/cpiData";

import "../styles/Inflation.css";

function Inflation() {
  const [period, setPeriod] = useState(12);
  const [comparison, setComparison] = useState("category");

  const filteredInflationData = useMemo(
    () => monthlyInflationData.slice(-period),
    [period]
  );

  const filteredCpiData = useMemo(
    () => monthlyCpiData.slice(-period),
    [period]
  );

  const currentInflation =
    filteredInflationData[filteredInflationData.length - 1];

  const previousInflation =
    filteredInflationData[0];

  const currentCpi =
    filteredCpiData[filteredCpiData.length - 1];

  const rateChange = currentInflation.rate - previousInflation.rate;

  const periodChange =
    `${rateChange > 0 ? "+" : ""}${rateChange.toFixed(2)} percentage points`;

  const highestCategory = [...inflationCategoryData].sort(
    (a, b) => b.rate - a.rate
  )[0];

  const lowestCategory = [...inflationCategoryData].sort(
    (a, b) => a.rate - b.rate
  )[0];

  const insights = [
    {
      icon: TrendingUp,
      title: "Highest category inflation",
      description: `${highestCategory.name} has the highest illustrative inflation rate at ${highestCategory.rate.toFixed(1)}%.`,
    },
    {
      icon: Activity,
      title: "Lowest category inflation",
      description: `${lowestCategory.name} has the lowest illustrative inflation rate at ${lowestCategory.rate.toFixed(1)}%.`,
    },
    {
      icon: BarChart3,
      title: "Inflation movement",
      description:
        rateChange > 0
          ? `Inflation increased by ${rateChange.toFixed(2)} percentage points across the selected period.`
          : rateChange < 0
          ? `Inflation decreased by ${Math.abs(rateChange).toFixed(2)} percentage points across the selected period.`
          : "Inflation remained unchanged across the selected period.",
    },
  ];

  return (
    <main className="inflation-page">
      <header className="inflation-header">
        <div>
          <div className="inflation-eyebrow">
            <span className="live-indicator" />
            ECONOMIC OVERVIEW
          </div>

          <h1>Inflation Analysis</h1>

          <p>
            Track price movements, consumer trends and inflation across
            different categories.
          </p>
        </div>

        <div className="inflation-header-icon">
          <Activity size={25} />
        </div>
      </header>

      <section className="inflation-toolbar">
        <div className="period-selector">
          <CalendarDays size={17} />

          {inflationPeriodOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className={period === option.value ? "active" : ""}
              onClick={() => setPeriod(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <span className="sample-label">
          <Info size={14} />
          {inflationDataSource.label}
        </span>
      </section>

      <section className="inflation-metrics">
        <MetricCard
          title="Inflation Rate"
          value={`${currentInflation.rate.toFixed(2)}%`}
          change={periodChange}
          icon={TrendingUp}
          trend={rateChange > 0 ? "up" : rateChange < 0 ? "down" : "neutral"}
        />

        <MetricCard
          title="Consumer Price Index"
          value={currentCpi.cpi.toFixed(2)}
          change="Illustrative index"
          icon={Activity}
          trend="neutral"
        />

        <MetricCard
          title="Repo Rate"
          value="5.50%"
          change="Illustrative reference"
          icon={Percent}
          trend="neutral"
        />

        <MetricCard
          title="Selected Period"
          value={`${period} Months`}
          change={`${filteredInflationData[0].month} – ${currentInflation.month}`}
          icon={CalendarDays}
          trend="neutral"
        />
      </section>

      <section className="inflation-charts">
        <InflationTrend
          monthlyData={filteredInflationData}
          cpiData={filteredCpiData}
        />
      </section>

      <CategoryComparison
        categoryData={inflationCategoryData}
        comparison={comparison}
        setComparison={setComparison}
      />

      <section className="inflation-panel insights-panel">
        <div className="panel-header">
          <div>
            <h3>Key Insights</h3>
            <p>Highlights based on the displayed illustrative dataset</p>
          </div>

        </div>

        <div className="insights-grid">
          {insights.map((insight, index) => {
            const Icon = insight.icon;

            return (
              <article className="insight-card" key={index}>
                <div className="insight-icon">
                  <Icon size={19} />
                </div>

                <div>
                  <h4>{insight.title}</h4>
                  <p>{insight.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <footer className="inflation-disclaimer">
        <Info size={16} />
        <p>
          This dashboard currently uses illustrative sample values for
          development and demonstration. They are not official Indian
          economic statistics and should not be used for financial or
          policy decisions.
        </p>
      </footer>
    </main>
  );
}

export default Inflation;
