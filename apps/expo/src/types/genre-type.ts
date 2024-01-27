const genreTypeMap = {
  FIXED: "固定費",
  FLUCTUATION: "変動費",
} as const;

export type GenreType = keyof typeof genreTypeMap;

export const genreTypeArray = Object.keys(genreTypeMap).map(
  (key) => key as GenreType,
);
