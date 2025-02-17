import { findConditionSession } from "./findConditionSession";

export const findCategoryIds = async (): Promise<string[]> => {
  const session = await findConditionSession("categoryIds");

  if (!session) {
    return [];
  }

  return session.value;
};
