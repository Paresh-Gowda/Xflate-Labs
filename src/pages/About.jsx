import {
  Activity,
  BarChart3,
  Database,
  Target,
  Users,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

import SectionHeading from "../components/common/SectionHeading";

const objectives = [
  "Analyze inflation and deflation trends using economic indicators.",
  "Study consumer price movements across different categories.",
  "Visualize historical economic data through interactive charts.",
  "Understand how economic changes affect everyday spending.",
];

const coreAreas = [
  {
    icon: TrendingUp,
    title: "Economic Indicators",
    description: "Explore CPI trends and RBI Repo Rate movements.",
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    description: "Present economic trends through charts and comparisons.",
  },
  {
    icon: Database,
    title: "Data Organization",
    description: "Structure economic information for easier analysis.",
  },
];

function About() {
  return (
    <div className="page about-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">ABOUT THE PROJECT</span>
          <h1>About Xflate Labs</h1>
          <p>
            An academic initiative to make economic trends
            easier to explore, understand, and analyze.
          </p>
        </div>
      </div>

      <section className="about-hero">
        <div className="about-logo">
          <Activity size={34} />
        </div>

        <span className="about-brand-label">XFLATE LABS</span>

        <h2>Making economic data easier to understand.</h2>

        <p>
          Xflate Labs is an economic data analytics platform
          developed to explore inflation, deflation, and their
          impact on everyday consumer prices through organized
          information and interactive visualizations.
        </p>

        <div className="about-hero-tags">
          <span>Economic Analytics</span>
          <span>Data Visualization</span>
          <span>Academic Project</span>
        </div>
      </section>

      <section className="panel about-overview">
        <SectionHeading
          title="Project Overview"
          description="The idea and purpose behind our mini project."
        />

        <p className="body-copy">
          Changes in the economy directly influence the prices
          of goods and services people use every day. Inflation
          and deflation affect purchasing power, household
          budgets, and overall economic activity.
        </p>

        <p className="body-copy">
          Understanding these changes requires accessible
          information and meaningful representations of economic
          data. Xflate Labs brings key economic indicators and
          category-wise price information together in a
          centralized platform, helping users explore trends
          and understand changing price patterns.
        </p>
      </section>

      <section className="about-section">
        <SectionHeading
          title="Project Objectives"
          description="The key goals guiding the development of Xflate Labs."
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
      </section>

      <section className="panel about-core">
        <SectionHeading
          title="Core Areas of Focus"
          description="The primary analytical areas covered by the platform."
        />

        <div className="core-grid">
          {coreAreas.map((area) => {
            const Icon = area.icon;

            return (
              <div className="core-card" key={area.title}>
                <div className="core-icon">
                  <Icon size={23} />
                </div>

                <strong>{area.title}</strong>
                <p>{area.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="about-team-section">
        <SectionHeading
          title="Project Team"
          description="The people behind this academic initiative."
        />

        <div className="team-grid">
          <div className="team-card">
            <div className="team-icon">
              <Users size={23} />
            </div>
            <span>PROJECT DEVELOPERS</span>
            <h3>Paresh R.</h3>
            <h3>Prajwal J.</h3>
            <p>Mini Project Team</p>
          </div>

          <div className="team-card guide-card">
            <div className="team-icon">
              <GraduationCap size={23} />
            </div>
            <span>PROJECT GUIDE</span>
            <h3>Prof. Sanju A.N.</h3>
            <p>Project Guidance & Supervision</p>
          </div>
        </div>
      </section>

      <section className="about-project-meta">
        <div>
          <span>PROJECT TYPE</span>
          <strong>Academic Mini Project</strong>
        </div>

        <div>
          <span>PROGRAM</span>
          <strong>Computer Science and Business Systems</strong>
        </div>

        <div>
          <span>ACADEMIC YEAR</span>
          <strong>2026–27</strong>
        </div>
      </section>

      <footer className="about-footer">
        <strong>XFLATE LABS</strong>
        <span>Understanding economic changes through data.</span>
      </footer>
    </div>
  );
}

export default About;
