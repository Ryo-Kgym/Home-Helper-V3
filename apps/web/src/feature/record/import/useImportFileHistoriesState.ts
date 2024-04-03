import type { ImportFileHistory } from "@feature/app/schema";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useImportFileHistories = () =>
  useImportFileHistoriesState((state) => ({
    importFileHistories: state.importFileHistories,
    setImportFileHistories: state.setImportFileHistories,
  }));

type State = {
  importFileHistories: ImportFileHistory[];
};

type Actions = {
  setImportFileHistories: (histories: ImportFileHistory[]) => void;
};

export const useImportFileHistoriesState = create(
  immer<State & Actions>((set) => ({
    importFileHistories: [],
    setImportFileHistories: (histories) =>
      set((state) => {
        state.importFileHistories = histories;
      }),
  })),
);
