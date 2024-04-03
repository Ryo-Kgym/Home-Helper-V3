export const generateId = (seq = 0) => (new Date().getTime() + seq).toString();

export const generateIds = (source: object) =>
  Object.keys(source).map((_, index) => generateId(index));
