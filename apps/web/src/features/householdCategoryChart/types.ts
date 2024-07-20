export type CategoryChartData = Record<
  string, // categoryId
  {
    categoryName: string;
    genreName: string;
    monthlyTotal: Record<
      string, // yyyy-mm
      number
    >;
  }
>;
