import { saveCookie } from "./cookie";

export const saveAccountIds = async (accountIds: string[]) => {
  saveCookie({ key: "accountIds", value: JSON.stringify(accountIds) });
};
