import { ArrowDownRight, ArrowUpRight } from "lucide-react";

function MetricCard({ title, value, change, icon: Icon, trend = "neutral" }) {
  const isPositive = trend === "up";
  const isNegative = trend === "down";

  return (
    <div className="metric-card">
      <div className="metric-card-top">
        <span className="metric-title">{title}</span>

        {Icon && (
          <div className="metric-icon">
            <Icon size={19} />
          </div>
        )}
      </div>

      <div className="metric-value">{value}</div>

      {change && (
        <div
          className={`metric-change ${
            isPositive ? "positive" : isNegative ? "negative" : ""
          }`}
        >
          {isPositive && <ArrowUpRight size={15} />}
          {isNegative && <ArrowDownRight size={15} />}
          <span>{change}</span>
        </div>
      )}
    </div>
  );
}

export default MetricCard;
