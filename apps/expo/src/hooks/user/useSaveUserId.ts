import { mock } from "~/config/mock";

export const useSaveUserId = () => {
  const userId = mock.groupId;

  const saveUserId = () => undefined;

  return {
    userId,
    saveUserId,
  };
};
