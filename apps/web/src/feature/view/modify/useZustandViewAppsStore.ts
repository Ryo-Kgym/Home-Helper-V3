import { appendViewApp } from "@feature/view/modify/function/appendViewApp";
import { changeToModifyMode } from "@feature/view/modify/function/changeToModifyMode";
import {
  InputViewApp,
  InputViewApps,
} from "@feature/view/modify/inputViewApps";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  viewApps: InputViewApps;
};

type Actions = {
  setViewAppsAction: (viewApps: InputViewApps) => void;
  appendViewAppAction: (viewApp: InputViewApp) => void;
  changeToModifyModeAction: () => void;
};

export const useZustandViewAppsStore = create<State & Actions>()(
  immer((set) => ({
    viewApps: {},
    setViewAppsAction: (viewApps) => set({ viewApps }),
    appendViewAppAction: (viewApp) => {
      set((state) => appendViewApp(state.viewApps, viewApp));
    },
    changeToModifyModeAction: () => {
      set((state) => changeToModifyMode(state.viewApps));
    },
  })),
);

export const useGetViewApps = () =>
  useZustandViewAppsStore((store) => store.viewApps);

export const useSetViewApps = () =>
  useZustandViewAppsStore((store) => store.setViewAppsAction);

export const useAppendViewApp = () =>
  useZustandViewAppsStore((store) => store.appendViewAppAction);

export const useChangeToModifyMode = () =>
  useZustandViewAppsStore((store) => store.changeToModifyModeAction);
