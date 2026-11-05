import {
  ArrowUpRight,
  CalendarDays,
  Download,
} from "lucide-react";

import StatCard from "../components/dashboard/StatCard";
import InflationChart from "../components/dashboard/InflationChart";
import CategoryOverview from "../components/dashboard/CategoryOverview";
import SectionHeading from "../components/common/SectionHeading";

import { economicStats } from "../data/mockData";

function Dashboard() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">ECONOMIC INTELLIGENCE</span>
          <h1>Dashboard Overview</h1>
          <p>
            Understand economic movements and their impact on everyday prices.
          </p>
        </div>

        <button className="secondary-button">
          <CalendarDays size={17} />
          Overview
        </button>
      </div>

      <div className="welcome-banner">
        <div>
          <span>WELCOME TO XFLATE LABS</span>
          <h2>Making sense of changing prices.</h2>
          <p>
            Explore inflation trends, monitor price movements and
            understand economic indicators.
          </p>
        </div>

        <div className="banner-icon">
          <ArrowUpRight size={48} />
        </div>
      </div>

      <SectionHeading
        title="Economic Indicators"
        description="An overview of important economic measurements."
      />

      <div className="stats-grid">
        {economicStats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="dashboard-grid">
        <section className="panel chart-panel">
          <SectionHeading
            title="Inflation Trends"
            description="Illustrative monthly inflation movements."
          />

          <div className="chart-area">
            <InflationChart />
          </div>
        </section>

        <section className="panel">
          <SectionHeading
            title="Category Overview"
            description="Price movement by category."
          />

          <CategoryOverview />
        </section>
      </div>

      <div className="information-note">
        <Download size={17} />
        <span>
          Demonstration data is currently displayed.
          Official datasets will be integrated in a later development phase.
        </span>
      </div>
    </div>
  );
}

export default Dashboard;