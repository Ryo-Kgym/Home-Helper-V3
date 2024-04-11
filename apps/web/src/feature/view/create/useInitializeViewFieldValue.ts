import { useViewFieldValueState } from "./useViewFieldValueState";

export const useInitializeViewFieldValue = () =>
  useViewFieldValueState((store) => store.initialize);
