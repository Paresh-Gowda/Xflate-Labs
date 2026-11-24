import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowUpRight,
  ShoppingBasket,
  Fuel,
  Laptop,
  House,
  HeartPulse,
  Shirt,
  Package,
  Layers3,
  X,
  SlidersHorizontal,
} from "lucide-react";

import SectionHeading from "../components/common/SectionHeading";
import { categories } from "../data/categoryData";
import "../styles/Categories.css";

const categoryIcons = [
  ShoppingBasket,
  Fuel,
  Laptop,
  House,
  HeartPulse,
  Shirt,
];

function Categories() {
  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return categories;

    return categories.filter((category) =>
      category.name.toLowerCase().includes(query)
    );
  }, [search]);

  const totalSubcategories = categories.reduce(
    (total, category) => total + category.subcategories.length,
    0
  );

  const averageInflation = categories.length
    ? (
        categories.reduce(
          (total, category) =>
            total + (parseFloat(category.value) || 0),
          0
        ) / categories.length
      ).toFixed(1)
    : "0.0";

  return (
    <main className="page categories-page">
      <header className="page-header categories-header">
        <div>
          <span className="eyebrow">PRICE INTELLIGENCE</span>
          <h1>Category Analysis</h1>
          <p>
            Understand price movements across everyday spending categories.
            Explore the factors shaping your cost of living.
          </p>
        </div>

        <div className="categories-header-icon">
          <Layers3 size={24} />
        </div>
      </header>

      <section className="category-overview">
        <article className="category-stat-card">
          <div className="category-stat-icon blue">
            <Layers3 size={19} />
          </div>
          <div>
            <span>Total Categories</span>
            <strong>{categories.length.toString().padStart(2, "0")}</strong>
          </div>
        </article>

        <article className="category-stat-card">
          <div className="category-stat-icon violet">
            <Package size={19} />
          </div>
          <div>
            <span>Subcategories</span>
            <strong>{totalSubcategories}</strong>
          </div>
        </article>

        <article className="category-stat-card">
          <div className="category-stat-icon green">
            <ArrowUpRight size={19} />
          </div>
          <div>
            <span>Average Category Rate</span>
            <strong>{averageInflation}%</strong>
          </div>
        </article>
      </section>

      <section className="panel categories-panel">
        <div className="categories-panel-heading">
          <SectionHeading
            title="Explore Categories"
            description="Select a category to explore its subcategories and price information."
          />

          <span className="category-count">
            {filteredCategories.length}{" "}
            {filteredCategories.length === 1 ? "category" : "categories"}
          </span>
        </div>

        <div className="category-toolbar">
          <div className="search-box category-search">
            <Search size={19} />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search categories..."
              aria-label="Search categories"
            />

            {search && (
              <button
                type="button"
                className="category-clear-search"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <X size={17} />
              </button>
            )}
          </div>

          <div className="category-search-label">
            <SlidersHorizontal size={15} />
            <span>Browse all categories</span>
          </div>
        </div>

        <div className="category-list">
          {filteredCategories.map((category) => {
            const originalIndex = categories.findIndex(
              (item) => item.id === category.id
            );

            const Icon =
              categoryIcons[originalIndex % categoryIcons.length];

            return (
              <Link
                key={category.id}
                to={`/categories/${category.id}`}
                className="category-row category-clickable"
              >
                <div className="category-row-left">
                  <div className="category-number">
                    {String(originalIndex + 1).padStart(2, "0")}
                  </div>

                  <div className="category-row-icon">
                    <Icon size={20} />
                  </div>

                  <div className="category-info">
                    <strong>{category.name}</strong>
                    <span>
                      {category.subcategories.length} subcategories
                    </span>
                  </div>
                </div>

                <div className="category-row-right">
                  <div className="category-value">
                    <strong>{category.value}</strong>
                    <span>Inflation</span>
                  </div>

                  <div className="category-arrow">
                    <ArrowUpRight size={19} />
                  </div>
                </div>
              </Link>
            );
          })}

          {filteredCategories.length === 0 && (
            <div className="category-empty-state">
              <div className="category-empty-icon">
                <Search size={23} />
              </div>

              <h3>No categories found</h3>
              <p>
                We couldn't find a category matching "{search}".
                Try another search term.
              </p>

              <button
                type="button"
                onClick={() => setSearch("")}
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {filteredCategories.length > 0 && (
          <div className="categories-panel-footer">
            Showing {filteredCategories.length} of {categories.length} categories
          </div>
        )}
      </section>
    </main>
  );
}

export default Categories;
