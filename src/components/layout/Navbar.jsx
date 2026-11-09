import { Menu, Activity, ChevronRight } from "lucide-react";

function Navbar({ onMenuClick }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button
          className="mobile-menu-button"
          onClick={onMenuClick}
          aria-label="Open navigation"
        >
          <Menu size={21} />
        </button>

        <div className="navbar-breadcrumb">
          <span className="breadcrumb-muted">Xflate Labs</span>
          <ChevronRight size={15} />
          <span className="breadcrumb-current">Workspace</span>
        </div>
      </div>

      <div className="navbar-right">
        <div className="navbar-workspace-badge">
          <Activity size={16} />
          <span>Economic Analytics</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
