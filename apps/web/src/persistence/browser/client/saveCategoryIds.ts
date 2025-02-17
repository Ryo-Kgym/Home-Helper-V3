"use server";

import { insertConditionSession } from "./insertConditionSession";

export const saveCategoryIds = async (categoryIds: string[]) => {
  await insertConditionSession("categoryIds", categoryIds, "string[]");
};
