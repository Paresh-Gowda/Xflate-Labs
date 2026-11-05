import { TrendingUp, TrendingDown, Minus } from "lucide-react";

function StatCard({ title, value, change, description, trend }) {
  const Icon =
    trend === "down"
      ? TrendingDown
      : trend === "neutral"
        ? Minus
        : TrendingUp;

  return (
    <div className="stat-card">
      <div className="stat-top">
        <span>{title}</span>
        <div className="stat-icon">
          <Icon size={19} />
        </div>
      </div>

      <h2>{value}</h2>

      <div className="stat-bottom">
        <span className={`trend ${trend}`}>
          {change}
        </span>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default StatCard;