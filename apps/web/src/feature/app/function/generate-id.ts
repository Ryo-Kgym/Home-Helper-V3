export const generateId = (seq = 0) => (new Date().getTime() + seq).toString();
