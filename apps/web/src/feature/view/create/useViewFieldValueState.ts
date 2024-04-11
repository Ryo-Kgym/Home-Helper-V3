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

export const useViewFieldValueState = create<State & Actions>()(
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
