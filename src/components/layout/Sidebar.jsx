import { NavLink, Link } from "react-router-dom";
import {
  LayoutDashboard,
  TrendingUp,
  ShoppingBasket,
  Activity,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Inflation Analysis",
    path: "/inflation",
    icon: TrendingUp,
  },
  {
    name: "Category Analysis",
    path: "/categories",
    icon: ShoppingBasket,
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Clickable Brand */}
      <Link to="/about" className="brand">
        <div className="brand-icon">
          <Activity size={22} />
        </div>

        <div>
          <h2>Xflate Labs</h2>
          <span>Economic Intelligence</span>
        </div>
      </Link>

      <div className="nav-label">MENU</div>

      <nav className="sidebar-nav">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-status">
          <span className="status-dot" />
          <span>Analytics Workspace</span>
        </div>

        <small>Version 1.0.0</small>
      </div>
    </aside>
  );
}

export default Sidebar;
