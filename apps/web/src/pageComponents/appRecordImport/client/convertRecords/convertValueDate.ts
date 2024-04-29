/**
 * @package
 */
export const convertValueDate = (originalValue: string) => {
  const foundFormat = formatRegexpList.find(({ regexp }) =>
    regexp.test(originalValue),
  );

  if (!foundFormat) {
    return {
      originalValue,
      value: undefined,
      errorMessage: `日付の形式が正しくありません: ${originalValue}`,
    };
  }

  const group = getGroup(foundFormat.regexp, originalValue);
  if (!group) {
    return {
      originalValue,
      value: undefined,
      errorMessage: `日付の形式が正しくありません: ${originalValue}`,
    };
  }

  const { year, month, day, time, milliSecond } = group;

  return {
    originalValue,
    value: `${year}-${month}-${day}T${time}.${milliSecond}Z`,
    errorMessage: undefined,
  };
};

const getGroup = (regexp: RegExp, originalValue: string) => {
  const group = regexp.exec(originalValue);
  if (!group) {
    return undefined;
  }

  const year = group[1]?.padStart(4, "0");
  const month = group[2]?.padStart(2, "0");
  const day = group[3]?.padStart(2, "0");
  // prettier-ignore
  const time = group[4]?.replace("時", ":")
      .replace("分", ":")
      .replace("秒", "")
    ?? "00:00:00";
  const milliSecond = group[5] ?? "000";

  return {
    year,
    month,
    day,
    time,
    milliSecond,
  };
};

const formatRegexpList = [
  {
    formatType: "jpn_ymd_hmsS",
    regexp:
      /^(\d{4})年([01]?\d)月([0123]?\d)日 ([012][01234]時[012345]\d分[012345]\d)秒\.?(\d{3})?$/,
  },
  {
    formatType: "jpn_ymd",
    regexp: /^(\d{4})年([01]?\d)月([0123]?\d)日$/,
  },
  {
    formatType: "slash_ymd_hmsS",
    regexp:
      /^(\d{4})\/([01]?\d)\/([0123]?\d) ([012][01234]:[012345]\d:[012345]\d)\.?(\d{3})?$/,
  },
  {
    formatType: "slash_ymd",
    regexp: /^(\d{4})\/([01]?\d)\/([0123]?\d)$/,
  },
  {
    formatType: "hyphen_ymd_hmsS_tz",
    regexp:
      /^(\d{4})-([01]\d)-([0123]\d)T([012][01234]:[012345]\d:[012345]\d)\.?(\d{3})Z$/,
  },
  {
    formatType: "hyphen_ymd_hmsS",
    regexp:
      /^(\d{4})-([01]\d)-([0123]\d) ([012][01234]:[012345]\d:[012345]\d)\.?(\d{3})?$/,
  },
  {
    formatType: "hyphen_ymd",
    regexp: /^(\d{4})-([01]\d{1})-([0123]\d{1})$/,
  },
];
