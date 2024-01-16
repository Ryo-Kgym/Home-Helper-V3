import { mock } from "~/config/mock";

export const useSaveGroupId = () => {
  const groupId = mock.groupId;

  const saveGroupId = () => undefined;

  return {
    groupId,
    saveGroupId,
  };
};
