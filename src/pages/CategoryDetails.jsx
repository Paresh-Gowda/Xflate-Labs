import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronRight,
  Search,
  TrendingUp,
  Layers3,
  Activity,
} from "lucide-react";
import { useState } from "react";

import { categories } from "../data/categoryData";
import SectionHeading from "../components/common/SectionHeading";

function CategoryDetails() {
  const { categoryId } = useParams();
  const [search, setSearch] = useState("");

  const category = categories.find(
    (item) => item.id === categoryId
  );

  if (!category) {
    return (
      <div className="page">
        <h1>Category Not Found</h1>
        <Link to="/categories">Back to Categories</Link>
      </div>
    );
  }

  const filteredItems = category.subcategories.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page category-details-page">

      {/* Breadcrumb */}
      <div className="category-breadcrumb">
        <Link to="/">Dashboard</Link>
        <ChevronRight size={15} />
        <Link to="/categories">Categories</Link>
        <ChevronRight size={15} />
        <strong>{category.name}</strong>
      </div>

      {/* Page Header */}
      <div className="page-header category-page-header">
        <div>
          <span className="eyebrow">ECONOMIC INTELLIGENCE</span>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </div>

        <Link to="/categories" className="secondary-button">
          <ArrowLeft size={16} />
          All Categories
        </Link>
      </div>

      {/* Category Overview */}
      <section className="category-overview-grid">

        <div className="category-overview-card featured">
          <div className="overview-card-top">
            <div className="overview-icon">
              <TrendingUp size={21} />
            </div>
            <span className="overview-label">
              CATEGORY INDICATOR
            </span>
          </div>

          <h2>{category.value}</h2>
          <p>Illustrative price movement</p>

          <div className="overview-card-footer">
            <span className="status-dot" />
            {category.status}
          </div>
        </div>

        <div className="category-overview-card">
          <div className="overview-card-top">
            <div className="overview-icon">
              <Layers3 size={21} />
            </div>
            <span className="overview-label">
              CATEGORY COVERAGE
            </span>
          </div>

          <h2>{String(category.subcategories.length).padStart(2, "0")}</h2>
          <p>Available subcategories</p>

          <div className="overview-card-footer muted">
            Explore individual segments
          </div>
        </div>

        <div className="category-overview-card">
          <div className="overview-card-top">
            <div className="overview-icon">
              <Activity size={21} />
            </div>
            <span className="overview-label">
              ANALYSIS STATUS
            </span>
          </div>

          <h2>Available</h2>
          <p>Subcategory analysis workspace</p>

          <div className="overview-card-footer muted">
            Select a segment below
          </div>
        </div>

      </section>

      {/* Subcategories */}
      <section className="panel category-subcategory-panel">

        <SectionHeading
          title="Explore Subcategories"
          description={`Explore individual products and price indicators within ${category.name}.`}
        />

        <div className="category-search-wrapper">
          <div className="search-box category-search">
            <Search size={18} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search subcategories..."
              aria-label="Search subcategories"
            />
          </div>

          <span className="subcategory-count">
            {filteredItems.length} of {category.subcategories.length} segments
          </span>
        </div>

        <div className="subcategory-grid">
          {filteredItems.map((item, index) => {
            const slug = item
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/&/g, "and");

            return (
              <Link
                key={item}
                to={`/categories/${category.id}/${encodeURIComponent(slug)}`}
                className="subcategory-card"
              >
                <div className="subcategory-number">
                  {String(category.subcategories.indexOf(item) + 1).padStart(2, "0")}
                </div>

                <div className="subcategory-info">
                  <strong>{item}</strong>
                  <span>Explore price trends and analysis</span>
                </div>

                <div className="subcategory-arrow">
                  <ArrowUpRight size={19} />
                </div>
              </Link>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="empty-state">
            No matching subcategories found.
          </div>
        )}

      </section>
    </div>
  );
}

export default CategoryDetails;
