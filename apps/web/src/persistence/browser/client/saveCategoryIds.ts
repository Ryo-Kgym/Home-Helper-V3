import { saveCookie } from "./cookie";

export const saveCategoryIds = async (categoryIds: string[]) => {
  saveCookie({ key: "categoryIds", value: JSON.stringify(categoryIds) });
};
