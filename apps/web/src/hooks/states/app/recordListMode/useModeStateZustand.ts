import { RecordListMode } from "@features/appRecordList/types/recordListMode";
import { create } from "zustand";

type State = {
  mode: RecordListMode;
};

type Actions = {
  setMode: (mode: RecordListMode) => void;
  reset: () => void;
};

/**
 * @package
 */
export const useModeStateZustand = create<State & Actions>((set) => ({
  mode: "show",
  setMode: (mode) => set({ mode }),
  reset: () => set({ mode: "show" }),
}));

export const useResetMode = () => useModeStateZustand((store) => store.reset);
