export const subcategoryAnalytics = {
  vegetables: {
    name: "Vegetables",
    category: "Food & Beverages",
    region: "India",
    period: "October 2026",
    status: "Verified",
    dataType: "Consumer Price Index (CPI)",
    unit: "Year-on-year inflation (%)",

    description:
      "Analyse vegetable price movements using official Indian CPI statistics.",

    metrics: [
      {
        label: "Food Inflation",
        value: "8.94%",
        change: "+1.20 percentage points",
        note: "September to October 2026",
        type: "neutral",
      },
      {
        label: "Potato Inflation",
        value: "-14.24%",
        change: "-2.72 percentage points",
        note: "Year-on-year",
        type: "negative",
      },
      {
        label: "Onion Inflation",
        value: "116.22%",
        change: "+8.09 percentage points",
        note: "Year-on-year",
        type: "positive",
      },
      {
        label: "Headline CPI",
        value: "6.09%",
        change: "+0.55 percentage points",
        note: "September to October 2026",
        type: "neutral",
      },
    ],

    chart: {
      title: "Vegetable Price Inflation",
      description: "Year-on-year CPI inflation for selected vegetables.",
      unit: "%",
      data: [
        { name: "Potato", value: -14.24 },
        { name: "Onion", value: 116.22 },
      ],
    },

    comparison: [
      {
        name: "September 2026",
        foodInflation: 7.74,
        headlineCpi: 5.54,
      },
      {
        name: "October 2026",
        foodInflation: 8.94,
        headlineCpi: 6.09,
      },
    ],

    insights: [
      {
        title: "Sharp difference in vegetable inflation",
        description:
          "Potato recorded negative year-on-year inflation of 14.24%, while onion recorded positive inflation of 116.22%.",
      },
      {
        title: "Food inflation accelerated",
        description:
          "Food inflation increased from 7.74% in September to 8.94% in October 2026.",
      },
      {
        title: "Overall retail inflation",
        description:
          "Headline CPI inflation increased from 5.54% to 6.09% over the same period.",
      },
    ],

    source: {
      name: "Ministry of Statistics and Programme Implementation",
      publisher: "Government of India",
      published: "12 November 2026",
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2335416&lang=1&reg=3",
    },
  },

  fruits: {
    name: "Fruits",
    category: "Food & Beverages",
    region: "India",
    period: "October 2026",
    status: "Verified",
    dataType: "Consumer Price Index (CPI)",
    unit: "Year-on-year inflation (%)",

    description:
      "Track fruit inflation and price movements across major fruit commodities in India.",

    metrics: [
      {
        label: "Fruit Group Inflation",
        value: "11.86%",
        change: "October 2026",
        note: "Fruits and nuts",
        type: "positive",
      },
      {
        label: "Guava Inflation",
        value: "27.98%",
        change: "October 2026",
        note: "Year-on-year",
        type: "positive",
      },
      {
        label: "Apple Inflation",
        value: "18.26%",
        change: "October 2026",
        note: "Year-on-year",
        type: "positive",
      },
      {
        label: "Banana Inflation",
        value: "10.98%",
        change: "October 2026",
        note: "Year-on-year",
        type: "positive",
      },
    ],

    chart: {
      title: "Fruit Commodity Inflation",
      description: "Year-on-year inflation across selected fruit items.",
      unit: "%",
      data: [
        { name: "Guava", value: 27.98 },
        { name: "Apple", value: 18.26 },
        { name: "Banana", value: 10.98 },
        { name: "Mango", value: 9.02 },
      ],
    },

    comparison: [
      {
        name: "September 2026",
        foodInflation: 7.74,
        headlineCpi: 5.54,
      },
      {
        name: "October 2026",
        foodInflation: 8.94,
        headlineCpi: 6.09,
      },
    ],

    insights: [
      {
        title: "Guava records the highest movement",
        description:
          "Guava recorded 27.98% year-on-year inflation among the selected fruit items.",
      },
      {
        title: "Apple prices show significant inflation",
        description:
          "Apple recorded 18.26% year-on-year inflation in October 2026.",
      },
      {
        title: "Fruit group inflation remains elevated",
        description: "The fruits and nuts CPI group recorded 11.86% inflation.",
      },
    ],

    source: {
      name: "IndiaInflation - CPI Data",
      publisher: "October 2026 CPI item-level summary",
      published: "October 2026",
      url: "https://indiainflation.com/cpi/category/food-and-beverages/food",
    },
  },

  "dairy-products": {
    name: "Dairy Products",
    category: "Food & Beverages",
    region: "India",
    period: "October 2026",
    status: "Verified",
    dataType: "Consumer Price Index (CPI)",
    unit: "Year-on-year inflation (%)",

    description:
      "Understand inflation across milk, dairy products and essential milk-based commodities.",

    metrics: [
      {
        label: "Dairy Group Inflation",
        value: "5.57%",
        change: "October 2026",
        note: "Milk, dairy and eggs",
        type: "neutral",
      },
      {
        label: "Paneer Inflation",
        value: "5.69%",
        change: "October 2026",
        note: "Year-on-year",
        type: "positive",
      },
      {
        label: "Liquid Milk Inflation",
        value: "4.63%",
        change: "October 2026",
        note: "Year-on-year",
        type: "neutral",
      },
      {
        label: "Curd Inflation",
        value: "4.39%",
        change: "October 2026",
        note: "Year-on-year",
        type: "neutral",
      },
    ],

    chart: {
      title: "Dairy Commodity Inflation",
      description: "Year-on-year inflation across selected dairy products.",
      unit: "%",
      data: [
        { name: "Paneer", value: 5.69 },
        { name: "Ghee", value: 5.17 },
        { name: "Liquid Milk", value: 4.63 },
        { name: "Curd", value: 4.39 },
        { name: "Butter", value: 3.76 },
      ],
    },

    comparison: [
      {
        name: "September 2026",
        foodInflation: 7.74,
        headlineCpi: 5.54,
      },
      {
        name: "October 2026",
        foodInflation: 8.94,
        headlineCpi: 6.09,
      },
    ],

    insights: [
      {
        title: "Paneer records the highest selected movement",
        description:
          "Paneer recorded 5.69% year-on-year inflation in October 2026.",
      },
      {
        title: "Milk inflation remains moderate",
        description: "Liquid milk recorded 4.63% year-on-year inflation.",
      },
      {
        title: "Dairy group inflation",
        description:
          "Milk, other dairy products and eggs recorded 5.57% inflation.",
      },
    ],

    source: {
      name: "IndiaInflation - CPI Data",
      publisher: "October 2026 CPI item-level summary",
      published: "October 2026",
      url: "https://indiainflation.com/cpi/category/food-and-beverages/food",
    },
  },

  "meat-and-poultry": {
    name: "Meat & Poultry",
    category: "Food & Beverages",
    region: "India",
    period: "October 2026",
    status: "Verified",
    dataType: "Consumer Price Index (CPI)",
    unit: "Year-on-year inflation (%)",

    description:
      "Monitor inflation across poultry, fresh meat and other meat commodities.",

    metrics: [
      {
        label: "Meat Group Inflation",
        value: "10.63%",
        change: "October 2026",
        note: "Fresh, chilled or frozen meat",
        type: "positive",
      },
      {
        label: "Beef / Buffalo Meat",
        value: "15.30%",
        change: "October 2026",
        note: "Year-on-year",
        type: "positive",
      },
      {
        label: "Chicken Inflation",
        value: "11.32%",
        change: "October 2026",
        note: "Year-on-year",
        type: "positive",
      },
      {
        label: "Mutton Inflation",
        value: "8.63%",
        change: "October 2026",
        note: "Year-on-year",
        type: "positive",
      },
    ],

    chart: {
      title: "Meat & Poultry Inflation",
      description: "Year-on-year inflation across selected meat commodities.",
      unit: "%",
      data: [
        { name: "Beef / Buffalo", value: 15.3 },
        { name: "Chicken", value: 11.32 },
        { name: "Mutton", value: 8.63 },
        { name: "Pork", value: 1.45 },
      ],
    },

    comparison: [
      {
        name: "September 2026",
        foodInflation: 7.74,
        headlineCpi: 5.54,
      },
      {
        name: "October 2026",
        foodInflation: 8.94,
        headlineCpi: 6.09,
      },
    ],

    insights: [
      {
        title: "Beef and buffalo meat lead selected movements",
        description:
          "Beef and buffalo meat recorded 15.30% year-on-year inflation.",
      },
      {
        title: "Chicken inflation remains elevated",
        description:
          "Chicken recorded 11.32% year-on-year inflation in October 2026.",
      },
      {
        title: "Meat group inflation",
        description: "Fresh, chilled or frozen meat recorded 10.63% inflation.",
      },
    ],

    source: {
      name: "IndiaInflation - CPI Data",
      publisher: "October 2026 CPI item-level summary",
      published: "October 2026",
      url: "https://indiainflation.com/cpi/category/food-and-beverages/food",
    },
  },

  "cereals-and-grains": {
    name: "Cereals & Grains",
    category: "Food & Beverages",
    region: "India",
    period: "October 2026",
    status: "Verified",
    dataType: "Consumer Price Index (CPI)",
    unit: "Year-on-year inflation (%)",

    description:
      "Explore inflation across staple grains, rice, wheat and cereal-based products.",

    metrics: [
      {
        label: "Cereal Group Inflation",
        value: "5.94%",
        change: "October 2026",
        note: "Cereals and cereal products",
        type: "neutral",
      },
      {
        label: "Rice Inflation",
        value: "12.51%",
        change: "October 2026",
        note: "Year-on-year",
        type: "positive",
      },
      {
        label: "Wheat Inflation",
        value: "3.05%",
        change: "October 2026",
        note: "Year-on-year",
        type: "neutral",
      },
      {
        label: "Wheat Atta Inflation",
        value: "2.87%",
        change: "October 2026",
        note: "Year-on-year",
        type: "neutral",
      },
    ],

    chart: {
      title: "Cereal Commodity Inflation",
      description: "Year-on-year inflation across selected grain commodities.",
      unit: "%",
      data: [
        { name: "Rice", value: 12.51 },
        { name: "Wheat", value: 3.05 },
        { name: "Wheat Atta", value: 2.87 },
        { name: "Maida", value: 2.82 },
        { name: "Breakfast Cereals", value: 1.18 },
      ],
    },

    comparison: [
      {
        name: "September 2026",
        foodInflation: 7.74,
        headlineCpi: 5.54,
      },
      {
        name: "October 2026",
        foodInflation: 8.94,
        headlineCpi: 6.09,
      },
    ],

    insights: [
      {
        title: "Rice shows the strongest selected movement",
        description:
          "Rice recorded 12.51% year-on-year inflation in October 2026.",
      },
      {
        title: "Wheat inflation remains comparatively lower",
        description: "Wheat recorded 3.05% year-on-year inflation.",
      },
      {
        title: "Cereal group inflation",
        description: "Cereals and cereal products recorded 5.94% inflation.",
      },
    ],

    source: {
      name: "IndiaInflation - CPI Data",
      publisher: "October 2026 CPI item-level summary",
      published: "October 2026",
      url: "https://indiainflation.com/cpi/category/food-and-beverages/food",
    },
  },
};
