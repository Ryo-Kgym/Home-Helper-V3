import { appendViewApp } from "@feature/view/modify/function/appendViewApp";
import { changeToModifyMode } from "@feature/view/modify/function/changeToModifyMode";
import {
  InputViewApp,
  InputViewApps,
} from "@feature/view/modify/type/inputViewApps";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useGetViewAppsZustand = () =>
  useZustandViewAppsStore((store) => store.viewApps);

export const useSetViewAppsZustand = () =>
  useZustandViewAppsStore((store) => store.setViewAppsAction);

export const useAppendViewAppZustand = () =>
  useZustandViewAppsStore((store) => store.appendViewAppAction);

export const useChangeToModifyModeZustand = () =>
  useZustandViewAppsStore((store) => store.changeToModifyModeAction);

type State = {
  viewApps: InputViewApps;
};

type Actions = {
  setViewAppsAction: (viewApps: InputViewApps) => void;
  appendViewAppAction: (viewApp: InputViewApp) => void;
  changeToModifyModeAction: () => void;
};

const useZustandViewAppsStore = create<State & Actions>()(
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
