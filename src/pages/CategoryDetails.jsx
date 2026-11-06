import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronRight,
  Search,
  TrendingUp,
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
    <div className="page">

      {/* Breadcrumb */}
      <div className="category-breadcrumb">
        <Link to="/">Dashboard</Link>
        <ChevronRight size={15} />
        <Link to="/categories">Categories</Link>
        <ChevronRight size={15} />
        <strong>{category.name}</strong>
      </div>

      {/* Header */}
      <div className="page-header">
        <div>
          <span className="eyebrow">CATEGORY ANALYSIS</span>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </div>

        <Link to="/categories" className="secondary-button">
          <ArrowLeft size={16} />
          All Categories
        </Link>
      </div>

      {/* Highlight */}
      <div className="analysis-highlight">
        <div className="highlight-icon">
          <TrendingUp size={24} />
        </div>

        <div>
          <span>ILLUSTRATIVE PRICE MOVEMENT</span>
          <h2>{category.value}</h2>
          <p>{category.status}</p>
        </div>
      </div>

      {/* Subcategories */}
      <section className="panel">
        <SectionHeading
          title="Explore Subcategories"
          description={`Browse products and services under ${category.name}.`}
        />

        <div className="search-box category-search">
          <Search size={18} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search subcategories..."
          />
        </div>

        <div className="subcategory-grid">
          {filteredItems.map((item, index) => (
            <Link
              key={item}
              to={`/categories/${category.id}/${encodeURIComponent(item.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and"))}`}
              className="subcategory-card"
            >
              <div className="subcategory-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="subcategory-info">
                <strong>{item}</strong>
                <span>Explore price trends and details</span>
              </div>

              <ArrowUpRight size={19} />
            </Link>
          ))}
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