import { ViewApps } from "@oneforall/domain/schema/view/view-app-schema";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  viewApps: ViewApps;
};

type Actions = {
  setViewApps: (viewApps: ViewApps) => void;
};

export const useZustandViewAppsStore = create<State & Actions>()(
  immer((set) => ({
    viewApps: {},
    setViewApps: (viewApps) => set({ viewApps }),
  })),
);

export const useGetViewApps = () =>
  useZustandViewAppsStore((store) => store.viewApps);

export const useSetViewApps = () =>
  useZustandViewAppsStore((store) => store.setViewApps);

export const useAppendViewApp = () =>
  useZustandViewAppsStore(
    (store) => (viewApp: ViewApps) =>
      store.setViewApps({ ...store.viewApps, ...viewApp }),
  );
