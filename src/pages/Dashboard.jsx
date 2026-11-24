import { Link } from "react-router-dom";
import {
  TrendingUp,
  ShoppingBasket,
  ArrowUpRight,
  Activity,
  BarChart3,
  Database,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import ThreeHero from "../components/visuals/ThreeHero";
import "../styles/Dashboard.css";

const sections = [
  {
    number: "01",
    title: "Inflation Analysis",
    description:
      "Explore inflation trends, consumer price index movements, historical data and economic indicators.",
    icon: TrendingUp,
    path: "/inflation",
    label: "Explore analytics",
  },
  {
    number: "02",
    title: "Category Analysis",
    description:
      "Track price movements across food, fuel, electronics, property and everyday expenses.",
    icon: ShoppingBasket,
    path: "/categories",
    label: "Explore categories",
  },
  {
    number: "03",
    title: "About Xflate Labs",
    description:
      "Learn about the project, its objectives and how it helps explain changing prices.",
    icon: Activity,
    path: "/about",
    label: "Discover the project",
  },
];

const highlights = [
  {
    title: "Visual Analytics",
    description:
      "Understand economic patterns through interactive charts and visual representations.",
    icon: BarChart3,
  },
  {
    title: "Organized Information",
    description:
      "Explore economic data through structured analytical sections and categories.",
    icon: Database,
  },
  {
    title: "Accessible Insights",
    description:
      "Make economic information easier to navigate, understand and interpret.",
    icon: ShieldCheck,
  },
];

function Dashboard() {
  return (
    <main className="page dashboard-page">
      {/* PAGE INTRODUCTION */}

      <header className="page-header dashboard-heading">
        <div>
          <span className="eyebrow">ECONOMIC INTELLIGENCE</span>
          <h1>Dashboard Overview</h1>
          <p>
            Your starting point for understanding economic trends and
            everyday price movements.
          </p>
        </div>

        <div className="dashboard-heading-mark">
          <Activity size={22} />
        </div>
      </header>

      {/* HERO */}

      <section className="dashboard-hero">
        <div className="dashboard-hero-glow" />

        <div className="dashboard-hero-content">
          <div className="dashboard-hero-label">
            <Sparkles size={14} />
            WELCOME TO XFLATE LABS
          </div>

          <h2>
            Making sense of
            <br />
            <span>changing prices.</span>
          </h2>

          <p>
            Understand inflation, explore economic indicators and discover
            how changing prices affect everyday life.
          </p>

          <Link to="/inflation" className="dashboard-hero-button">
            Explore Analytics
            <ArrowUpRight size={18} />
          </Link>

          <div className="dashboard-hero-note">
            <span className="dashboard-hero-note-dot" />
            Explore the economy with clarity
          </div>
        </div>

        <div className="dashboard-hero-visual">
          <ThreeHero />
          <span>ECONOMIC INSIGHTS</span>
        </div>

        <div className="dashboard-hero-index">01 / EXPLORE</div>
      </section>

      {/* PLATFORM INTRODUCTION */}

      <section className="dashboard-intro">
        <div className="dashboard-intro-copy">
          <span className="eyebrow">A CLEARER VIEW OF THE ECONOMY</span>

          <h2>
            Understand what changes.
            <br />
            Discover why it matters.
          </h2>

          <p>
            Xflate Labs brings economic information into one accessible
            workspace. Explore inflation and category-wise price movements
            through dedicated analytical sections.
          </p>
        </div>

        <div className="dashboard-intro-art">
          <div className="dashboard-intro-art-circle">
            <BarChart3 size={31} />
          </div>
          <span>DATA · CONTEXT · INSIGHT</span>
        </div>
      </section>

      {/* EXPLORE PLATFORM */}

      <section className="dashboard-sections">
        <div className="section-heading dashboard-section-heading">
          <div>
            <span className="eyebrow">YOUR WORKSPACE</span>
            <h2>Explore Xflate Labs</h2>
            <p>Choose an area to explore in detail.</p>
          </div>

          <span className="dashboard-section-count">03 SECTIONS</span>
        </div>

        <div className="dashboard-navigation-grid">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <Link
                to={section.path}
                className="dashboard-navigation-card"
                key={section.number}
              >
                <div className="dashboard-card-top">
                  <span className="dashboard-card-number">
                    {section.number}
                  </span>

                  <div className="dashboard-card-icon">
                    <Icon size={21} />
                  </div>
                </div>

                <div className="dashboard-card-body">
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </div>

                <div className="dashboard-card-bottom">
                  <span>{section.label}</span>
                  <div className="dashboard-card-link-icon">
                    <ArrowRight size={17} />
                  </div>
                </div>

                <ArrowUpRight
                  className="dashboard-card-arrow"
                  size={19}
                />
              </Link>
            );
          })}
        </div>
      </section>

      {/* PLATFORM CAPABILITIES */}

      <section className="dashboard-highlights">
        <div className="section-heading dashboard-section-heading">
          <div>
            <span className="eyebrow">BUILT FOR CLARITY</span>
            <h2>What Xflate Labs offers</h2>
            <p>
              A structured approach to exploring economic information.
            </p>
          </div>
        </div>

        <div className="dashboard-highlights-grid">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <article className="dashboard-highlight" key={item.title}>
                <div className="dashboard-highlight-top">
                  <div className="highlight-icon">
                    <Icon size={21} />
                  </div>
                  <span>0{index + 1}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}

      <footer className="dashboard-footer">
        <div className="dashboard-footer-brand">
          <strong>Xflate Labs</strong>
          <span>Economic Intelligence</span>
        </div>

        <span>Understanding prices. Exploring the economy.</span>
      </footer>
    </main>
  );
}

export default Dashboard;
