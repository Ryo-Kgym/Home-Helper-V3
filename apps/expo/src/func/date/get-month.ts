export const getMonth = (baseDate?: Date) => {
  if (!baseDate) {
    baseDate = new Date();
  }

  const firstDayOfMonth = new Date(
    baseDate.getFullYear(),
    baseDate.getMonth(),
    1,
    9,
  );
  const lastDayOfMonth = new Date(
    baseDate.getFullYear(),
    baseDate.getMonth() + 1,
    0,
    9,
  );

  const month = baseDate.getMonth() + 1;

  return {
    firstDayOfMonth,
    lastDayOfMonth,
    month,
  };
};
