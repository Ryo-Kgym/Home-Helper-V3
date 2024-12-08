import { useModeStateZustand } from "~/hooks/states/app/recordListMode/useModeStateZustand";

export const useRecordListMode = () =>
  useModeStateZustand((store) => ({
    mode: store.mode,
    setMode: store.setMode,
  }));
