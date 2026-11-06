import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "../../data/categoryData";

function CategoryOverview() {
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <Link
          to={`/categories/${category.id}`}
          className="category-row category-clickable"
          key={category.id}
        >
          <div className="category-number">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div className="category-info">
            <strong>{category.name}</strong>
            <span>{category.status}</span>
          </div>

          <div className="category-value">
            <strong>{category.value}</strong>
            {category.status === "Increasing" ? (
              <ArrowUpRight size={19} />
            ) : (
              <ArrowDownRight size={19} />
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryOverview;