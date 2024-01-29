export const getYear = (baseDate?: Date) => {
  if (!baseDate) {
    baseDate = new Date();
  }

  const year = baseDate.getFullYear();
  const firstDayOfYear = new Date(year, 0, 1, 9);
  const lastDayOfYear = new Date(year, 12, 0, 9);
  const lastYear = new Date(year - 1, 0, 1, 9);

  return {
    year,
    firstDayOfYear,
    lastDayOfYear,
    lastYear,
  };
};
