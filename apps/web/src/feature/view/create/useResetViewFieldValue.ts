import { useViewFieldValueState } from "./useViewFieldValueState";

export const useResetViewFieldValue = () =>
  useViewFieldValueState((store) => store.resetViewFieldValue);
