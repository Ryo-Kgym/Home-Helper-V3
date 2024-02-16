import dayjs from "dayjs";

export const useDate = () => {
  const getNow = () => {
    const date = new Date();
    date.setHours(9);
    return date;
  };

  const getThisFirstDate = () => {
    const date = getNow();
    date.setDate(1);
    return date;
  };

  const getThisLastDate = () => {
    const date = getNow();
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    return date;
  };

  const convertToFull = (date: Date) => {
    return dayjs(date).format("YYYY-MM-DD HH:mm:ss.SSSSSS");
  };

  const convertToYmd = (date: Date) => {
    return dayjs(date).format("YYYY-MM-DD");
  };

  /**
   * @deprecated
   * @param date
   */
  const offsetDate = (date: Date) => {
    const offset = date.getTimezoneOffset();
    return new Date(date.getTime() - offset * 60 * 1000);
  };

  return {
    getNow,
    getThisFirstDate,
    getThisLastDate,
    convertToFull,
    convertToYmd,
    offsetDate,
  };
};
