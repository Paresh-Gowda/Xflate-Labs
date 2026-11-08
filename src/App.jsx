import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

import Dashboard from "./pages/Dashboard";
import Inflation from "./pages/Inflation";
import Categories from "./pages/Categories";
import About from "./pages/About";
import CategoryDetails from "./pages/CategoryDetails";
import SubcategoryDetails from "./pages/SubcategoryDetails";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="app-layout">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={closeSidebar}
      />

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        />
      )}

      <main className="main-content">
        <Navbar
          onMenuClick={() => setSidebarOpen(true)}
        />

        <div className="page-container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inflation" element={<Inflation />} />
            <Route path="/categories" element={<Categories />} />

            <Route
              path="/categories/:categoryId"
              element={<CategoryDetails />}
            />

            <Route
              path="/categories/:categoryId/:subcategorySlug"
              element={<SubcategoryDetails />}
            />

            <Route path="/about" element={<About />} />

            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
