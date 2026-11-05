import { TrendingUp, Info } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import InflationChart from "../components/dashboard/InflationChart";

function Inflation() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">ECONOMIC ANALYSIS</span>
          <h1>Inflation Analysis</h1>
          <p>
            Explore changes in the general price level over time.
          </p>
        </div>
      </div>

      <div className="analysis-highlight">
        <div className="highlight-icon">
          <TrendingUp size={24} />
        </div>

        <div>
          <span>ILLUSTRATIVE INFLATION RATE</span>
          <h2>4.85%</h2>
          <p>Sample value for frontend demonstration only.</p>
        </div>
      </div>

      <section className="panel">
        <SectionHeading
          title="Historical Inflation Trend"
          description="Monthly inflation rate visualization."
        />

        <div className="large-chart">
          <InflationChart />
        </div>
      </section>

      <section className="panel explanation-panel">
        <SectionHeading
          title="Understanding Inflation"
          description="What does inflation actually mean?"
        />

        <p>
          Inflation refers to the sustained increase in the general
          price level of goods and services over time. As prices
          increase, the purchasing power of money decreases.
        </p>

        <div className="info-callout">
          <Info size={19} />
          <span>
            The Consumer Price Index (CPI) is an important indicator
            used to measure changes in consumer prices.
          </span>
        </div>
      </section>
    </div>
  );
}

export default Inflation;