export const useSaveGroupId = () => {
  const groupId = process.env.EXPO_PUBLIC_MOCK_GROUP_ID ?? "";

  const saveGroupId = () => undefined;

  return {
    groupId,
    saveGroupId,
  };
};
