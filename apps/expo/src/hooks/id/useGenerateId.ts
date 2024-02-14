export const useGenerateId = () => {
  return {
    generateId: () => generateULID(),
  };
};

const generateULID = () => {
  const timeStamp = Date.now().toString(36);
  // const randomPart = Math.random().toString(36).substr(2, 6); // ランダムな文字列の一部を生成
  return timeStamp.toUpperCase();
};
