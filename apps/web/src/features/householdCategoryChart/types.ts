export type CategoryChartData = Record<
  string, // categoryId
  {
    categoryName: string;
    monthlyTotal: Record<
      string, // yyyy-mm
      number
    >;
  }
>;
