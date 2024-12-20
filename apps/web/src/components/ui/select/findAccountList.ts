import { getCookieValue } from "../../../persistence/browser/server/cookie";
import { SelectProps } from "./v4";

export const findAccountList = async (): Promise<
  SelectProps<string>["data"] | undefined
> => {
  const value = await getCookieValue("accountList");

  if (!value) {
    return undefined;
  }

  return JSON.parse(value) as SelectProps<string>["data"];
};
