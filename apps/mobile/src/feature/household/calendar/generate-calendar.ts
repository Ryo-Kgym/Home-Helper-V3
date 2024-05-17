export const generateCalendar = (baseDate: Date): Date[] => {
  const dateList: Date[] = [];
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth();
  const firstWeek = new Date(year, month, 1).getDay() - 1;
  const count = 7 * 6;

  for (let i = 0; i < count; i++) {
    const date = new Date(year, month, i - firstWeek, 9, 0, 0);
    dateList.push(date);
  }

  return dateList;
};
