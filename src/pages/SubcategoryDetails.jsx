import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  TrendingUp,
  TrendingDown,
  Activity,
  BarChart3,
  Info,
  ExternalLink,
  CalendarDays,
  Database,
} from "lucide-react";

import { categories } from "../data/categoryData";
import { subcategoryAnalytics } from "../data/subcategoryAnalytics";

function SubcategoryDetails() {
  const { categoryId, subcategorySlug } = useParams();

  const category = categories.find(
    (item) => item.id === categoryId
  );

  const subcategory = category?.subcategories.find(
    (item) =>
      item.toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/&/g, "and") === subcategorySlug
  );

  if (!category || !subcategory) {
    return (
      <div className="page">
        <h1>Item Not Found</h1>
        <Link to="/categories">Back to Categories</Link>
      </div>
    );
  }

  const slug = subcategorySlug;
  const analytics = subcategoryAnalytics[slug];

  if (!analytics) {
    return (
      <div className="page">
        <div className="category-breadcrumb">
          <Link to="/">Dashboard</Link>
          <span>/</span>
          <Link to="/categories">Categories</Link>
          <span>/</span>
          <Link to={`/categories/${category.id}`}>
            {category.name}
          </Link>
          <span>/</span>
          <strong>{subcategory}</strong>
        </div>

        <div className="page-header">
          <div>
            <span className="eyebrow">PRICE INTELLIGENCE</span>
            <h1>{subcategory}</h1>
            <p>
              Explore economic indicators and price movements
              for {subcategory.toLowerCase()}.
            </p>
          </div>

          <Link
            to={`/categories/${category.id}`}
            className="secondary-button"
          >
            <ArrowLeft size={16} />
            Back to {category.name}
          </Link>
        </div>

        <section className="panel subcategory-detail">
          <div className="highlight-icon">
            <Database size={24} />
          </div>
          <h2>Data integration in progress</h2>
          <p>
            Verified economic data for this subcategory
            is being prepared.
          </p>
          <div className="info-callout">
            <Info size={19} />
            <span>
              We only display verified statistics.
              This section will become available once
              its data source has been integrated.
            </span>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page analytics-page">

      {/* Breadcrumb */}
      <div className="category-breadcrumb">
        <Link to="/">Dashboard</Link>
        <span>/</span>
        <Link to="/categories">Categories</Link>
        <span>/</span>
        <Link to={`/categories/${category.id}`}>
          {category.name}
        </Link>
        <span>/</span>
        <strong>{subcategory}</strong>
      </div>

      {/* Page heading */}
      <div className="page-header analytics-header">
        <div>
          <span className="eyebrow">
            ECONOMIC INTELLIGENCE / {category.name.toUpperCase()}
          </span>

          <h1>{analytics.name} Analytics</h1>

          <p>{analytics.description}</p>

          <div className="analytics-meta">
            <span>
              <CalendarDays size={15} />
              {analytics.period}
            </span>

            <span>
              <Database size={15} />
              {analytics.dataType}
            </span>

            <span className="verified-status">
              <span className="status-dot" />
              {analytics.status} data
            </span>
          </div>
        </div>

        <Link
          to={`/categories/${category.id}`}
          className="secondary-button"
        >
          <ArrowLeft size={16} />
          Back to {category.name}
        </Link>
      </div>

      {/* Metric cards */}
      <section className="analytics-metrics">

        {analytics.metrics.map((metric, index) => (
          <div className="analytics-metric-card" key={metric.label}>
            <div className="metric-top">
              <span>{metric.label}</span>

              <div className="metric-icon">
                {index === 0 && <Activity size={19} />}
                {index === 1 && <TrendingDown size={19} />}
                {index === 2 && <TrendingUp size={19} />}
                {index === 3 && <BarChart3 size={19} />}
              </div>
            </div>

            <h2>{metric.value}</h2>

            <div className="metric-bottom">
              <strong>{metric.change}</strong>
              <span>{metric.note}</span>
            </div>
          </div>
        ))}

      </section>

      {/* Main chart */}
      <section className="panel analytics-chart-panel">

        <div className="analytics-section-heading">
          <div>
            <span className="eyebrow">MARKET PERFORMANCE</span>
            <h2>{analytics.chart.title}</h2>
            <p>{analytics.chart.description}</p>
          </div>

          <span className="chart-unit">
            {analytics.chart.unit}
          </span>
        </div>

        <div className="analytics-bar-chart">

          {analytics.chart.data.map((item) => {
            const maxValue = Math.max(
              ...analytics.chart.data.map((d) => Math.abs(d.value)),
              1
            );

            const width =
              (Math.abs(item.value) / maxValue) * 100;

            return (
              <div className="analytics-bar-row" key={item.name}>
                <div className="analytics-bar-label">
                  <span>{item.name}</span>
                  <strong>
                    {item.value.toFixed(2)}%
                  </strong>
                </div>

                <div className="analytics-bar-track">
                  <div
                    className={`analytics-bar-fill ${
                      item.value < 0 ? "bar-negative" : ""
                    }`}
                    style={{ width: `${width}%` }}
                  />
                </div>
              </div>
            );
          })}

        </div>

        <div className="chart-footnote">
          <Info size={15} />
          <span>
            Year-on-year inflation. Negative values indicate
            prices below the corresponding period last year.
          </span>
        </div>

      </section>

      {/* Comparison */}
      <section className="panel analytics-comparison">

        <div className="analytics-section-heading">
          <div>
            <span className="eyebrow">PERIOD COMPARISON</span>
            <h2>Inflation comparison</h2>
            <p>Compare the latest two reporting periods.</p>
          </div>
        </div>

        <div className="comparison-table">
          <div className="comparison-row comparison-head">
            <span>Period</span>
            <span>Food inflation</span>
            <span>Headline CPI</span>
          </div>

          {analytics.comparison.map((item) => (
            <div className="comparison-row" key={item.name}>
              <strong>{item.name}</strong>
              <span>{item.foodInflation.toFixed(2)}%</span>
              <span>{item.headlineCpi.toFixed(2)}%</span>
            </div>
          ))}
        </div>

      </section>

      {/* Insights */}
      <section className="panel insights-panel">

        <div className="analytics-section-heading">
          <div>
            <span className="eyebrow">ECONOMIC OBSERVATIONS</span>
            <h2>What the data tells us</h2>
            <p>Key findings from the reported economic indicators.</p>
          </div>

          <div className="insights-icon">
            <Activity size={21} />
          </div>
        </div>

        <div className="insights-list">

          {analytics.insights.map((insight, index) => (
            <div className="insight-item" key={insight.title}>
              <div className="insight-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <h3>{insight.title}</h3>
                <p>{insight.description}</p>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Sources */}
      <section className="panel analytics-source">

        <div className="source-icon">
          <Database size={21} />
        </div>

        <div className="source-content">
          <span className="eyebrow">DATA TRANSPARENCY</span>

          <h3>{analytics.source.name}</h3>

          <p>
            {analytics.source.publisher} · Published{" "}
            {analytics.source.published}
          </p>

          <a
            href={analytics.source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="source-link"
          >
            View official report
            <ExternalLink size={15} />
          </a>
        </div>

      </section>

    </div>
  );
}

export default SubcategoryDetails;
