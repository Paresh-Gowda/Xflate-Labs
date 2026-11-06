import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Info, TrendingUp } from "lucide-react";

import { categories } from "../data/categoryData";

function SubcategoryDetails() {
  const { categoryId, subcategorySlug } = useParams();

  const category = categories.find(
    (item) => item.id === categoryId
  );

  const subcategory = category?.subcategories.find(
    (item) =>
      item.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and") ===
      subcategorySlug
  );

  if (!category || !subcategory) {
    return (
      <div className="page">
        <h1>Item Not Found</h1>
        <Link to="/categories">Back to Categories</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="category-breadcrumb">
        <Link to="/">Dashboard</Link>
        <span>/</span>
        <Link to="/categories">Categories</Link>
        <span>/</span>
        <Link to={`/categories/${category.id}`}>
          {category.name}
        </Link>
        <span>/</span>
        <strong>{subcategory}</strong>
      </div>

      <div className="page-header">
        <div>
          <span className="eyebrow">PRICE INTELLIGENCE</span>
          <h1>{subcategory}</h1>
          <p>
            Explore price changes and economic trends for {subcategory.toLowerCase()}.
          </p>
        </div>

        <Link
          to={`/categories/${category.id}`}
          className="secondary-button"
        >
          <ArrowLeft size={16} />
          Back to {category.name}
        </Link>
      </div>

      <section className="panel subcategory-detail">
        <div className="highlight-icon">
          <TrendingUp size={24} />
        </div>

        <h2>{subcategory} Analysis</h2>

        <p>
          This section will provide detailed price information,
          historical comparisons and price movement analysis
          for {subcategory.toLowerCase()}.
        </p>

        <div className="info-callout">
          <Info size={19} />
          <span>
            Historical price datasets and verified statistics
            for this subcategory will be integrated in the
            upcoming data integration phase.
          </span>
        </div>
      </section>
    </div>
  );
}

export default SubcategoryDetails;