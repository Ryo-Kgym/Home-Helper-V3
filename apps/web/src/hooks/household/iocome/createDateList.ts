export const createDateList = (date: Date): Date[] => {
  const dateList = [];
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const count = 7 * 6;

  for (let i = 0; i < count; i++) {
    const date = new Date(year, month, i - firstDay + 1);
    dateList.push(date);
  }

  return dateList;
};
