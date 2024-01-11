export enum GenreType {
  FLUCTUATION = "FLUCTUATION", // 変動
  FIXED = "FIXED", // 固定
}

const labelMap = new Map<GenreType, string>([
  [GenreType.FLUCTUATION, "変動"],
  [GenreType.FIXED, "固定"],
]);

export function getLabel(iocomeType: GenreType): string {
  return labelMap.get(iocomeType) ?? "";
}
