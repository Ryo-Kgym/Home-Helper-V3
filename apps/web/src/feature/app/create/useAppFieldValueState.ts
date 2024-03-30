import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import type { AppFieldValue } from "./app-field-value";

type State = {
  appFieldValue: AppFieldValue;
};

type Actions = {
  initialize: (appFieldValue: AppFieldValue) => void;
  saveAppFieldValue: (index: number, value: AppFieldValue[number]) => void;
  appendAppFieldValue: () => void;
  resetAppFieldValue: () => void;
};

const useAppFieldValueState = create<State & Actions>()(
  immer((set) => ({
    appFieldValue: {},
    initialize: (appFieldValue) =>
      set((state) => {
        state.appFieldValue = appFieldValue;
      }),
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

export const useInitializeAppFieldValue = () =>
  useAppFieldValueState((store) => store.initialize);
export const useGetAppFieldValue = () =>
  useAppFieldValueState((store) => store.appFieldValue);
export const useSaveAppFieldValue = () =>
  useAppFieldValueState((store) => store.saveAppFieldValue);

export const useAppendAppFieldValue = () =>
  useAppFieldValueState((store) => store.appendAppFieldValue);

export const useResetAppFieldValue = () =>
  useAppFieldValueState((store) => store.resetAppFieldValue);
