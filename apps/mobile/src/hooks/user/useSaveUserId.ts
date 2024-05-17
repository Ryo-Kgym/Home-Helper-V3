export const useSaveUserId = () => {
  const userId = process.env.EXPO_PUBLIC_MOCK_USER_ID ?? "";

  const saveUserId = () => undefined;

  return {
    userId,
    saveUserId,
  };
};
