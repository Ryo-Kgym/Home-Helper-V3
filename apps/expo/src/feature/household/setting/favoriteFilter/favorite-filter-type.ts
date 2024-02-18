export const favoriteFilterArgKeyArray = {
  categoryId: {
    label: "カテゴリ",
  },
  year: {
    label: "年",
  },
};

export type FavoriteFilterArgKey = keyof typeof favoriteFilterArgKeyArray;
