import { useViewFieldValueState } from "./useViewFieldValueState";

export const useRemoveViewFieldValue = () =>
  useViewFieldValueState((store) => store.removeViewFieldValue);
