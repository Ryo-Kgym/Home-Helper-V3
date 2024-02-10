export const generateYearOptions = ({
  min,
  max,
}: {
  min: number;
  max: number;
}) => {
  const currentYear = new Date().getFullYear();
  const years: { label: string; value: number }[] = [];
  for (let i = min; i <= max; i++) {
    years.push({
      label: `${currentYear + i}年`,
      value: i,
    });
  }
  return years;
};
