import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import type { AppFieldValue } from "./app-field-value";

type State = {
  appFieldValue: AppFieldValue;
};

type Actions = {
  saveAppFieldValue: (index: number, value: AppFieldValue[number]) => void;
  appendAppFieldValue: () => void;
  resetAppFieldValue: () => void;
};

const useAppFieldValueState = create<State & Actions>()(
  immer((set) => ({
    appFieldValue: {},
    saveAppFieldValue: (index, value) =>
      set((state) => {
        state.appFieldValue = {
          ...state.appFieldValue,
          [index]: value,
        };
      }),
    appendAppFieldValue: () =>
      set((state) => {
        const index = Object.keys(state.appFieldValue).length;
        state.appFieldValue = {
          ...state.appFieldValue,
          [index]: {
            fieldName: "",
            fieldKind: "text",
            options: {},
            mode: "add",
          },
        };
      }),
    resetAppFieldValue: () =>
      set(() => ({
        appFieldValue: {},
      })),
  })),
);

export const useGetAppFieldValue = () =>
  useAppFieldValueState((store) => store.appFieldValue);
export const useSaveAppFieldValue = () =>
  useAppFieldValueState((store) => store.saveAppFieldValue);

export const useAppendAppFieldValue = () =>
  useAppFieldValueState((store) => store.appendAppFieldValue);

export const useResetAppFieldValue = () =>
  useAppFieldValueState((store) => store.resetAppFieldValue);
