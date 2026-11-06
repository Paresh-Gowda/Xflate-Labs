import { Search, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import SectionHeading from "../components/common/SectionHeading";
import { categories } from "../data/categoryData";

function Categories() {
  const [search, setSearch] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">PRICE INTELLIGENCE</span>
          <h1>Category Analysis</h1>
          <p>
            Explore price movements across everyday spending categories.
          </p>
        </div>
      </div>

      <section className="panel">
        <SectionHeading
          title="Explore Categories"
          description="Select a category to explore its subcategories and price information."
        />

        <div className="search-box category-search">
          <Search size={18} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search categories..."
          />
        </div>

        <div className="category-list">
          {filteredCategories.map((category, index) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="category-row category-clickable"
            >
              <div className="category-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="category-info">
                <strong>{category.name}</strong>
                <span>
                  {category.subcategories.length} subcategories
                </span>
              </div>

              <div className="category-value">
                <strong>{category.value}</strong>
                <ArrowUpRight size={19} />
              </div>
            </Link>
          ))}

          {filteredCategories.length === 0 && (
            <div className="empty-state">
              No matching categories found.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Categories;