export enum GenreType {
  // eslint-disable-next-line no-unused-vars
  FLUCTUATION = "FLUCTUATION", // 変動
  // eslint-disable-next-line no-unused-vars
  FIXED = "FIXED", // 固定
}

const labelMap = new Map<GenreType, string>([
  [GenreType.FLUCTUATION, "変動"],
  [GenreType.FIXED, "固定"],
]);

export function getLabel(iocomeType: GenreType): string {
  return labelMap.get(iocomeType) ?? "";
}
