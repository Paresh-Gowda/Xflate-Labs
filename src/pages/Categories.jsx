import { Search, ShoppingBasket } from "lucide-react";
import { useState } from "react";

import SectionHeading from "../components/common/SectionHeading";
import { categories } from "../data/mockData";

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

      <div className="category-intro">
        <ShoppingBasket size={27} />
        <div>
          <h2>Everyday Price Impact</h2>
          <p>
            Understand how changing prices affect different
            goods and services.
          </p>
        </div>
      </div>

      <section className="panel">
        <SectionHeading
          title="Explore Categories"
          description="Browse the available economic categories."
        />

        <div className="search-box category-search">
          <Search size={18} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search categories..."
          />
        </div>

        <div className="category-table">
          <div className="table-header">
            <span>Category</span>
            <span>Price Movement</span>
            <span>Trend</span>
          </div>

          {filteredCategories.map((category) => (
            <div className="table-row" key={category.name}>
              <strong>{category.name}</strong>
              <span>{category.value}</span>
              <span className={`trend-badge ${category.status.toLowerCase()}`}>
                {category.status}
              </span>
            </div>
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