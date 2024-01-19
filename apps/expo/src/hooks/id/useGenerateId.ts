import { ulid } from "ulid";

export const useGenerateId = () => {
  return {
    generateId: () => ulid(),
  };
};
