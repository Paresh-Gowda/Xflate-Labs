import {
  Activity,
  BarChart3,
  Database,
  Target,
} from "lucide-react";

import SectionHeading from "../components/common/SectionHeading";

const objectives = [
  "Analyze inflation and deflation trends using economic indicators.",
  "Study consumer price movements across different categories.",
  "Visualize historical economic data through interactive charts.",
  "Understand how economic changes affect everyday spending.",
];

function About() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">ABOUT THE PROJECT</span>
          <h1>About Xflate Labs</h1>
          <p>
            Understanding the relationship between economic changes
            and everyday prices.
          </p>
        </div>
      </div>

      <section className="about-hero">
        <div className="about-logo">
          <Activity size={34} />
        </div>

        <span>XFLATE LABS</span>
        <h2>Making economic data easier to understand.</h2>

        <p>
          Xflate Labs is an economic data analytics platform focused
          on analyzing inflation, deflation and their impact on
          everyday consumer prices.
        </p>
      </section>

      <section className="panel">
        <SectionHeading
          title="Project Overview"
          description="The idea behind our mini project."
        />

        <p className="body-copy">
          Economic changes influence the cost of everyday goods and
          services. However, understanding these movements can be
          difficult without clear and accessible information.
          Xflate Labs aims to organize economic indicators and
          category-wise price information into a centralized
          visualization platform.
        </p>
      </section>

      <SectionHeading
        title="Project Objectives"
        description="What we aim to achieve."
      />

      <div className="objectives-grid">
        {objectives.map((objective, index) => (
          <div className="objective-card" key={objective}>
            <div className="objective-icon">
              <Target size={21} />
            </div>
            <span>OBJECTIVE 0{index + 1}</span>
            <p>{objective}</p>
          </div>
        ))}
      </div>

      <section className="panel">
        <SectionHeading
          title="Core Areas"
          description="The main analytical focus of Xflate Labs."
        />

        <div className="core-grid">
          <div>
            <TrendingIcon />
            <strong>Economic Indicators</strong>
            <p>CPI and RBI Repo Rate analysis.</p>
          </div>

          <div>
            <BarChart3 size={24} />
            <strong>Data Visualization</strong>
            <p>Charts and historical comparisons.</p>
          </div>

          <div>
            <Database size={24} />
            <strong>Data Management</strong>
            <p>Organized economic datasets.</p>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        Xflate Labs · CSBS Mini Project · Academic Year 2026–27
      </footer>
    </div>
  );
}

function TrendingIcon() {
  return <Activity size={24} />;
}

export default About;