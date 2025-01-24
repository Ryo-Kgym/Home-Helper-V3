export const convertSecondToMinute = (
  second: number | undefined,
  alternativeValue = "",
) => {
  if (second === undefined) {
    return {
      minute: undefined,
      second: undefined,
      mmss: alternativeValue,
    };
  }

  const mm = Math.floor(second / 60);
  const ss = second % 60;

  return {
    minute: mm,
    second: ss,
    mmss: `${mm.toString().padStart(2, "0")}:${ss.toString().padStart(2, "0")}`,
  };
};
