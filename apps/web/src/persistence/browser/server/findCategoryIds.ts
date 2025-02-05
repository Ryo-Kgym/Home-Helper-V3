import { getCookieValue } from "./cookie";

export const findCategoryIds = async (): Promise<string[]> => {
  const value = await getCookieValue("categoryIds");

  if (!value) {
    return [];
  }

  return JSON.parse(value) as string[];
};
