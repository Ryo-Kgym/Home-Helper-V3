import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import type { ViewFieldValue } from "./view-field-value";

type State = {
  viewFieldValue: ViewFieldValue;
};

type Actions = {
  initialize: (viewFieldValue: ViewFieldValue) => void;
  saveViewFieldValue: (index: number, value: ViewFieldValue[number]) => void;
  appendViewFieldValue: () => void;
  resetViewFieldValue: () => void;
  removeViewFieldValue: (index: number) => void;
};

const useViewFieldValueState = create<State & Actions>()(
  immer((set) => ({
    viewFieldValue: {},
    initialize: (viewFieldValue) =>
      set((state) => {
        state.viewFieldValue = viewFieldValue;
      }),
    saveViewFieldValue: (index, value) =>
      set((state) => {
        state.viewFieldValue = {
          ...state.viewFieldValue,
          [index]: value,
        };
      }),
    appendViewFieldValue: () =>
      set((state) => {
        const index = Object.keys(state.viewFieldValue).length;
        state.viewFieldValue = {
          ...state.viewFieldValue,
          [index]: {
            fieldName: "",
            fieldKind: "text",
            options: {},
            mode: "add",
          },
        };
      }),
    resetViewFieldValue: () =>
      set(() => ({
        viewFieldValue: {},
      })),
    removeViewFieldValue: (index) =>
      set((state) => {
        delete state.viewFieldValue[index];
      }),
  })),
);

export const useInitializeViewFieldValue = () =>
  useViewFieldValueState((store) => store.initialize);
export const useGetViewFieldValue = () => {
  return useViewFieldValueState((store) => ({
    fields: store.viewFieldValue,
    getBy: (index: number) => store.viewFieldValue[index],
  }));
};
export const useSaveViewFieldValue = () =>
  useViewFieldValueState((store) => store.saveViewFieldValue);

export const useAppendViewFieldValue = () =>
  useViewFieldValueState((store) => store.appendViewFieldValue);

export const useResetViewFieldValue = () =>
  useViewFieldValueState((store) => store.resetViewFieldValue);

export const useRemoveViewFieldValue = () =>
  useViewFieldValueState((store) => store.removeViewFieldValue);
