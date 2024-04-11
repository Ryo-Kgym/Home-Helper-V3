import type { RecordListMode } from "@feature/view/recordList/RecordListClient";
import { create } from "zustand";

type State = {
  mode: RecordListMode;
};

type Actions = {
  setMode: (mode: RecordListMode) => void;
  reset: () => void;
};

const useModeState = create<State & Actions>((set) => ({
  mode: "show",
  setMode: (mode) => set({ mode }),
  reset: () => set({ mode: "show" }),
}));

export const useMode = () =>
  useModeState((store) => ({
    mode: store.mode,
    setMode: store.setMode,
  }));

export const useResetMode = () => useModeState((store) => store.reset);
