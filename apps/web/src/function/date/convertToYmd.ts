import dayjs from "dayjs";

export const convertToYmd = (date: Date) => {
  return dayjs(date).format("YYYY-MM-DD");
};
