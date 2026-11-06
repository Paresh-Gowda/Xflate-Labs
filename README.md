# Xflate Labs

## 🔗 Live Demo
[View Project](https://xflate-labs.vercel.app/)

Inflation, Deflation & Everyday Price Impact Analyzer

Xflate Labs is a web-based economic data analytics platform developed as a CSBS mini project for the academic year 2026–27. It focuses on analyzing inflation, deflation, and the impact of changing prices on everyday goods and services. The platform aims to make economic information easier to understand through a centralized and user-friendly interface.

The application features an interactive dashboard, inflation analysis, category-wise price comparisons, historical trend visualizations, and economic indicators such as the Consumer Price Index (CPI) and RBI Repo Rate. Built using React.js, Vite, CSS, React Router, Chart.js, and Lucide React, the platform provides a responsive interface for exploring economic data and understanding price movements.

## Project Structure

```
xflate-labs/
│
├── public/
│   └── assets/
│
├── src/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── StatCard.jsx
│   │   │   ├── InflationChart.jsx
│   │   │   └── CategoryOverview.jsx
│   │   │
│   │   └── common/
│   │       └── SectionHeading.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Inflation.jsx
│   │   ├── Categories.jsx
│   │   ├── CategoryDetails.jsx
│   │   ├── SubcategoryDetails.jsx
│   │   └── About.jsx
│   │
│   ├── data/
│   │   └── mockData.js
│   │   └── categoryData.js
│   │
│   ├── styles/
│   │    └── Inflation.css
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package-lock.json
├── package.json
├── vercel.json
└── README.md
```