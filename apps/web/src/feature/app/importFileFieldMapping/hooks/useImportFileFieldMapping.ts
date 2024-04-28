import { useImportFileFieldMappingZustand } from "./useImportFileFieldMappingZustand";

export const useImportFileFieldMapping = () =>
  useImportFileFieldMappingZustand((store) => store.importFileFieldMapping);
