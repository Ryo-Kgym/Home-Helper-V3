import {
  ViewApp,
  ViewApps,
} from "@oneforall/domain/schema/view/view-app-schema";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  viewApps: ViewApps;
};

type Actions = {
  setViewApps: (viewApps: ViewApps) => void;
  appendViewApp: (viewApp: ViewApp) => void;
};

export const useZustandViewAppsStore = create<State & Actions>()(
  immer((set, get) => ({
    viewApps: {},
    setViewApps: (viewApps) => set({ viewApps }),
    appendViewApp: (viewApp) => {
      const index = Object.keys(get).length;
      set((state) => {
        state.viewApps[index] = viewApp;
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
