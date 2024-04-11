import { useViewFieldValueState } from "./useViewFieldValueState";

export const useGetViewFieldValue = () => {
  return useViewFieldValueState((store) => ({
    fields: store.viewFieldValue,
    getBy: (index: number) => store.viewFieldValue[index],
  }));
};
