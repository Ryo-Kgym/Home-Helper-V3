import { useViewFieldValueState } from "./useViewFieldValueState";

export const useSaveViewFieldValue = () =>
  useViewFieldValueState((store) => store.saveViewFieldValue);
