export const monthlyInflationData = [
  { month: "Jan", rate: 5.1 },
  { month: "Feb", rate: 5.0 },
  { month: "Mar", rate: 4.9 },
  { month: "Apr", rate: 4.8 },
  { month: "May", rate: 4.7 },
  { month: "Jun", rate: 4.9 },
  { month: "Jul", rate: 5.0 },
  { month: "Aug", rate: 4.8 },
  { month: "Sep", rate: 4.9 },
  { month: "Oct", rate: 4.7 },
  { month: "Nov", rate: 4.8 },
  { month: "Dec", rate: 4.85 },
];

export const inflationCategoryData = [
  { name: "Food", rate: 5.2, share: 32 },
  { name: "Fuel", rate: 3.8, share: 18 },
  { name: "Housing", rate: 6.4, share: 20 },
  { name: "Electronics", rate: 2.1, share: 8 },
  { name: "Personal", rate: 4.1, share: 15 },
  { name: "Other", rate: 3.4, share: 7 },
];

export const inflationPeriodOptions = [
  { label: "3M", value: 3 },
  { label: "6M", value: 6 },
  { label: "9M", value: 9 },
  { label: "12M", value: 12 },
];

// These are illustrative values, not verified official statistics.
export const inflationDataSource = {
  label: "Illustrative dataset",
  isOfficial: false,
};
