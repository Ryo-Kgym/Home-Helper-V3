import dayjs from "dayjs";

export const convertToHms = (date: Date | undefined, alternativeValue = "") => {
  if (date === undefined) {
    return alternativeValue;
  }

  return dayjs(date).format("HH:mm:ss");
};
