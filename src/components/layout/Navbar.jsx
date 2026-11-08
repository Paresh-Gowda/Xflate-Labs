import { Menu, Search } from "lucide-react";

function Navbar({ onMenuClick }) {
  return (
    <header className="navbar">
      <button
        className="mobile-menu-button"
        onClick={onMenuClick}
        aria-label="Open navigation"
      >
        <Menu size={23} />
      </button>

      <div className="navbar-search">
        <Search size={17} />
        <span>Economic Analytics Workspace</span>
      </div>

      <div className="navbar-right">
        <span className="navbar-indicator">
          <span />
          Xflate Labs
        </span>
      </div>
    </header>
  );
}

export default Navbar;
