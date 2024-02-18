export const favoriteFilterKeyArray = {
  categoryId: {
    label: "カテゴリ",
  },
  year: {
    label: "年",
  },
};

export type FavoriteFilterKey = keyof typeof favoriteFilterKeyArray;
