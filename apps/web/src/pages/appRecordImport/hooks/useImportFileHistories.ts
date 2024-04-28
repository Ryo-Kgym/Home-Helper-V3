import { useImportFileHistoriesZustand } from "@pages/appRecordImport/hooks/useImportFileHistoriesZustand";

export const useImportFileHistories = () =>
  useImportFileHistoriesZustand((state) => ({
    importFileHistories: state.importFileHistories,
    setImportFileHistories: state.setImportFileHistories,
  }));
