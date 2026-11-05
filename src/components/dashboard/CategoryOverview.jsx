import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { categories } from "../../data/mockData";

function CategoryOverview() {
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <div className="category-row" key={category.name}>
          <div className="category-number">
            0{index + 1}
          </div>

          <div className="category-info">
            <strong>{category.name}</strong>
            <span>{category.status}</span>
          </div>

          <div className="category-value">
            <strong>{category.value}</strong>
            {index % 2 === 0 ? (
              <ArrowUpRight size={17} />
            ) : (
              <ArrowDownRight size={17} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryOverview;