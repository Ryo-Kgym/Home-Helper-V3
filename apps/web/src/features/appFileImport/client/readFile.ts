/**
 * @package
 */
export const readFile = async (file: File) =>
  await file.stream().getReader().read();
