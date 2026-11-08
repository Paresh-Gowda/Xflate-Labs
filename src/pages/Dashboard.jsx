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
} from "lucide-react";

function Dashboard() {
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
        "Learn about the project, its objectives and how it helps understand changing prices.",
      icon: Activity,
      path: "/about",
      label: "Discover the project",
    },
  ];

  return (
    <div className="page dashboard-page">

      {/* PAGE HEADER */}

      <div className="page-header dashboard-heading">
        <div>
          <span className="eyebrow">ECONOMIC INTELLIGENCE</span>
          <h1>Dashboard Overview</h1>
          <p>
            Your starting point for understanding economic
            trends and everyday price movements.
          </p>
        </div>
      </div>

      {/* HERO SECTION */}

      <section className="dashboard-hero">
        <div className="dashboard-hero-content">
          <span className="dashboard-hero-label">
            WELCOME TO XFLATE LABS
          </span>

          <h2>
            Making sense of
            <br />
            changing prices.
          </h2>

          <p>
            Understand inflation, explore economic indicators
            and discover how changing prices affect everyday life.
          </p>

          <Link to="/inflation" className="dashboard-hero-button">
            Explore Analytics
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="dashboard-hero-visual">
          <div className="hero-circle hero-circle-one" />
          <div className="hero-circle hero-circle-two" />

          <div className="hero-visual-icon">
            <Activity size={65} strokeWidth={1.2} />
          </div>

          <span>ECONOMIC INSIGHTS</span>
        </div>
      </section>

      {/* PLATFORM INTRODUCTION */}

      <section className="dashboard-intro">
        <div>
          <span className="eyebrow">EXPLORE THE PLATFORM</span>
          <h2>Everything you need to understand price movements.</h2>
          <p>
            Xflate Labs brings economic information into one
            accessible workspace. Explore dedicated analytical
            sections to understand inflation and category-wise
            price changes.
          </p>
        </div>

        <div className="dashboard-intro-icon">
          <BarChart3 size={36} />
        </div>
      </section>

      {/* MAIN NAVIGATION CARDS */}

      <section className="dashboard-sections">

        <div className="section-heading">
          <div>
            <h2>Explore Xflate Labs</h2>
            <p>
              Choose an area to explore in detail.
            </p>
          </div>
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
                  <span>{section.number}</span>

                  <div className="dashboard-card-icon">
                    <Icon size={22} />
                  </div>
                </div>

                <h3>{section.title}</h3>

                <p>{section.description}</p>

                <div className="dashboard-card-link">
                  {section.label}
                  <ArrowRight size={17} />
                </div>

                <ArrowUpRight
                  className="dashboard-card-arrow"
                  size={20}
                />
              </Link>
            );
          })}
        </div>
      </section>

      {/* PLATFORM HIGHLIGHTS */}

      <section className="dashboard-highlights">
        <div className="section-heading">
          <div>
            <h2>What Xflate Labs offers</h2>
            <p>
              A structured approach to exploring economic information.
            </p>
          </div>
        </div>

        <div className="dashboard-highlights-grid">

          <div className="dashboard-highlight">
            <div className="highlight-icon">
              <BarChart3 size={21} />
            </div>

            <div>
              <h3>Visual Analytics</h3>
              <p>
                Understand economic patterns through interactive
                charts and visual representations.
              </p>
            </div>
          </div>

          <div className="dashboard-highlight">
            <div className="highlight-icon">
              <Database size={21} />
            </div>

            <div>
              <h3>Organized Information</h3>
              <p>
                Explore economic data through structured
                analytical sections and categories.
              </p>
            </div>
          </div>

          <div className="dashboard-highlight">
            <div className="highlight-icon">
              <ShieldCheck size={21} />
            </div>

            <div>
              <h3>Accessible Insights</h3>
              <p>
                Make economic information easier to navigate,
                understand and interpret.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}

      <footer className="dashboard-footer">
        <div>
          <strong>Xflate Labs</strong>
          <span>Economic Intelligence</span>
        </div>

        <span>Understanding prices. Exploring the economy.</span>
      </footer>

    </div>
  );
}

export default Dashboard;
