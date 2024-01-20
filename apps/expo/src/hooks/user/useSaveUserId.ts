import { mock } from "~/config/mock";

export const useSaveUserId = () => {
  const userId = mock.userId;

  const saveUserId = () => undefined;

  return {
    userId,
    saveUserId,
  };
};
