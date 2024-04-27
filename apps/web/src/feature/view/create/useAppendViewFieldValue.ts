import { useViewFieldValueState } from "./useViewFieldValueState";

export const useAppendViewFieldValue = () =>
  useViewFieldValueState((store) => store.appendViewFieldValue);
