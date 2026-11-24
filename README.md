# Xflate Labs

## 🔗 Live Demo
[View Project](https://xflate-labs.vercel.app/)

Inflation, Deflation & Everyday Price Impact Analyzer

Xflate Labs is a web-based economic data analytics platform developed as a CSBS Mini Project for the academic year 2026–27. The platform focuses on exploring inflation, deflation, and the impact of changing prices on everyday goods and services. It aims to simplify complex economic information through a centralized, structured, and user-friendly interface, helping users understand how economic changes influence purchasing power and daily expenses.

The platform features an interactive dashboard, inflation analysis, category-wise price comparisons, subcategory-level exploration, historical price trend visualizations, and key economic indicators such as the Consumer Price Index (CPI) and RBI Repo Rate. Users can navigate through different spending categories, examine price movements, and explore economic information through organized analytical views. The application is designed with a responsive interface to provide a consistent experience across desktop and mobile devices.

Xflate Labs is built using React.js, Vite, JavaScript, CSS, React Router, Chart.js, and Lucide React. Its component-based architecture organizes the application into reusable layout components, common UI elements, dedicated analytical pages, structured data modules, and styling resources. The project follows a modular structure that supports maintainability, scalability, and future enhancements while delivering an accessible platform for understanding economic trends and everyday price movements.

## Project Structure

```
xflate-labs/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── inflation/
│   │   ├── layout/
│   │   └── visuals/
│   │
│   ├── data/
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Categories.jsx
│   │   ├── CategoryDetails.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Inflation.jsx
│   │   └── SubcategoryDetails.jsx
│   │
│   ├── styles/
│   │   ├── Categories.css
│   │   ├── Dashboard.css
│   │   └── Inflation.css
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── vercel.json
└── README.md
```