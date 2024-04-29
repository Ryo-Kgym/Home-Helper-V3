import type { FieldOptionsDateFormat } from "@oneforall/domain/schema/recordSchema";

export const convertDateStyle = (
  value: string,
  format: FieldOptionsDateFormat,
  locale?: "ja-JP",
  timeZone?: "JST",
) => {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  return new Intl.DateTimeFormat(locale, {
    dateStyle: typeMapper[format],
    timeZone,
  }).format(date);
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
const typeMapper: Record<
  FieldOptionsDateFormat,
  "full" | "long" | "medium" | "short" | undefined
> = {
  "YYYY-MM-DD": "short",
  "YYYY-MM-DD HH:mm:ss": "full",
  YYYY_M_D_W__jpchar: "full",
};

// console.log(new Intl.DateTimeFormat('ja-JP', { dateStyle: 'full',   timeZone: 'JST' }).format(date));
// "2022年2月2日水曜日"
// console.log(new Intl.DateTimeFormat('ja-JP', { dateStyle: 'long',   timeZone: 'JST' }).format(date));
// "2022年2月2日"
// console.log(new Intl.DateTimeFormat('ja-JP', { dateStyle: 'medium', timeZone: 'JST' }).format(date));
// "2022/02/02"
// console.log(new Intl.DateTimeFormat('ja-JP', { dateStyle: 'short',  timeZone: 'JST' }).format(date));
// "2022/02/02"
