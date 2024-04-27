export const selectSingleFile = (
  event: React.ChangeEvent<HTMLInputElement>,
): { file: File; isEmpty: false } | { file: null; isEmpty: true } => {
  const files = event.currentTarget.files;
  // ファイルがないとき
  if (!files || files?.length === 0)
    return {
      file: null,
      isEmpty: true,
    };
  // 先頭のファイルを取得
  if (!files[0])
    return {
      file: null,
      isEmpty: true,
    };

  return {
    file: files[0],
    isEmpty: false,
  };
};
