import { appendViewApp } from "@feature/view/modify/function/appendViewApp";
import { changeToModifyMode } from "@feature/view/modify/function/changeToModifyMode";
import {
  InputViewApp,
  InputViewApps,
} from "@feature/view/modify/type/inputViewApps";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

/**
 * @package
 */
export const useGetViewAppsZustand = () =>
  useZustandViewAppsStore((store) => store.viewApps);

/**
 * @package
 */
export const useSetViewAppsZustand = () =>
  useZustandViewAppsStore((store) => store.setViewAppsAction);

/**
 * @package
 */
export const useAppendViewAppZustand = () =>
  useZustandViewAppsStore((store) => store.appendViewAppAction);

/**
 * @package
 */
export const useChangeToModifyModeZustand = () =>
  useZustandViewAppsStore((store) => store.changeToModifyModeAction);

type State = {
  viewApps: InputViewApps;
};

type Actions = {
  setViewAppsAction: (viewApps: InputViewApps) => void;
  appendViewAppAction: (viewApp: InputViewApp) => void;
  changeToModifyModeAction: (viewAppId: string) => void;
};

const useZustandViewAppsStore = create<State & Actions>()(
  immer((set) => ({
    viewApps: {},
    setViewAppsAction: (viewApps) => set({ viewApps }),
    appendViewAppAction: (viewApp) => {
      set((state) => appendViewApp(state.viewApps, viewApp));
    },
    changeToModifyModeAction: (viewAppId: string) => {
      set((state) => changeToModifyMode(state.viewApps, viewAppId));
    },
  })),
);
