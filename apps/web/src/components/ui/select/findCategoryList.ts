import { getCookieValue } from "../../../persistence/browser/server/cookie";
import { SelectProps } from "./v4";

export const findCategoryList = async (): Promise<
  SelectProps<string>["data"] | undefined
> => {
  const value = await getCookieValue("categoryList");

  if (!value) {
    return undefined;
  }

  return JSON.parse(value) as SelectProps<string>["data"];
};
