import type { ImportFileHistory } from "@oneforall/domain/schema/recordSchema";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  importFileHistories: ImportFileHistory[];
};

type Actions = {
  setImportFileHistories: (histories: ImportFileHistory[]) => void;
};

/**
 * @package
 */
export const useImportFileHistoriesZustand = create(
  immer<State & Actions>((set) => ({
    importFileHistories: [],
    setImportFileHistories: (histories) =>
      set((state) => {
        state.importFileHistories = histories;
      }),
  })),
);
