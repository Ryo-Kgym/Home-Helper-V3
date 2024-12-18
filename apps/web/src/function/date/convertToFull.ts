import dayjs from "dayjs";

export const convertToFull = (date: Date) => {
  return dayjs(date).format("YYYY-MM-DD HH:mm:ss.SSSSSS");
};
