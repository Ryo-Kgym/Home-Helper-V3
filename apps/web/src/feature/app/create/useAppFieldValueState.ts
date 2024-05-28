import { AppFieldValue } from "@oneforall/domain/schema/appFieldValue";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  appFieldValue: AppFieldValue;
};

type Actions = {
  initialize: (appFieldValue: AppFieldValue) => void;
  saveAppFieldValue: (index: number, value: AppFieldValue[number]) => void;
  appendAppFieldValue: () => void;
  resetAppFieldValue: () => void;
  removeAppFieldValue: (index: number) => void;
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
    removeAppFieldValue: (index) =>
      set((state) => {
        delete state.appFieldValue[index];
      }),
  })),
);

export const useInitializeAppFieldValue = () =>
  useAppFieldValueState((store) => store.initialize);
export const useGetAppFieldValue = () => {
  return useAppFieldValueState((store) => ({
    fields: store.appFieldValue,
    getBy: (index: number) => store.appFieldValue[index],
  }));
};
export const useSaveAppFieldValue = () =>
  useAppFieldValueState((store) => store.saveAppFieldValue);

export const useAppendAppFieldValue = () =>
  useAppFieldValueState((store) => store.appendAppFieldValue);

export const useResetAppFieldValue = () =>
  useAppFieldValueState((store) => store.resetAppFieldValue);

export const useRemoveAppFieldValue = () =>
  useAppFieldValueState((store) => store.removeAppFieldValue);
