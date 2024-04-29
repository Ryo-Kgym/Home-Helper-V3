import { useImportFileHistoriesZustand } from "./useImportFileHistoriesZustand";

export const useImportFileHistories = () =>
  useImportFileHistoriesZustand((state) => ({
    importFileHistories: state.importFileHistories,
    setImportFileHistories: state.setImportFileHistories,
  }));
