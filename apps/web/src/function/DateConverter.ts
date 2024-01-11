export function toJapanMd(date: Date): string {
  const dateStr = date.toString();
  const month = dateStr.slice(5, 7);
  const day = dateStr.slice(8, 10);
  return `${month}月${day}日`;
}
