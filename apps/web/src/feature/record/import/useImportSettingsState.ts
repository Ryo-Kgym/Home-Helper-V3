import { IMPORT_FILE_SETTINGS_DEFAULT } from "@feature/app/schema";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import type { ImportFileSettings } from "@feature/app/schema";

export const useImportFileSettings = () =>
  useImportSettingsState((store) => ({
    importFileSettings: store.importFileSettings,
    setImportFileSettings: store.setImportFileSettings,
  }));

type State = {
  importFileSettings: ImportFileSettings;
};

type Actions = {
  setImportFileSettings: (settings: ImportFileSettings) => void;
};

const useImportSettingsState = create<State & Actions>()(
  immer((set) => ({
    importFileSettings: IMPORT_FILE_SETTINGS_DEFAULT,
    setImportFileSettings: (settings) =>
      set((state) => {
        state.importFileSettings = settings;
      }),
  })),
);
