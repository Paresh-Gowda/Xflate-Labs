import { Bell, Search, Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="mobile-menu">
          <Menu size={21} />
        </button>

        <div className="breadcrumb">
          <span>Workspace</span>
          <span>/</span>
          <strong>Economic Overview</strong>
        </div>
      </div>

      <div className="navbar-right">
        <div className="search-box">
          <Search size={17} />
          <input placeholder="Search dashboard..." />
          <kbd>⌘ K</kbd>
        </div>

        <button className="icon-button">
          <Bell size={19} />
        </button>

        <div className="profile-avatar">XL</div>
      </div>
    </header>
  );
}

export default Navbar;