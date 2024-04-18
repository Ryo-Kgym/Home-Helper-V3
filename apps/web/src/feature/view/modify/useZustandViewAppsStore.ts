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
  setViewApps: (viewApps: InputViewApps) => void;
  appendViewApp: (viewApp: InputViewApp) => void;
  changeToModifyMode: () => void;
};

export const useZustandViewAppsStore = create<State & Actions>()(
  immer((set) => ({
    viewApps: {
      apps: {},
    },
    setViewApps: (viewApps) => set({ viewApps }),
    appendViewApp: (viewApp) => {
      set((state) => {
        const index = Object.keys(state.viewApps).length;
        state.viewApps[index] = viewApp;
      });
    },
    changeToModifyMode: () => {
      set((state) => {
        Object.values(state.viewApps).forEach((app) => {
          app.mode = "modify";
        });
      });
    },
  })),
);

export const useGetViewApps = () =>
  useZustandViewAppsStore((store) => store.viewApps);

export const useSetViewApps = () =>
  useZustandViewAppsStore((store) => store.setViewApps);

export const useAppendViewApp = () =>
  useZustandViewAppsStore((store) => store.appendViewApp);

export const useChangeToModifyMode = () =>
  useZustandViewAppsStore((store) => store.changeToModifyMode);
