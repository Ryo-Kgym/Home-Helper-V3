import { useEffect, useState } from "react";
// eslint-disable-next-line strict-dependencies/strict-dependencies
import { useImportFileSettings } from "@features/appImportFileSetting/client/useImportSettingsState";
import { decodeCsv } from "@provider/file/loader/csv/loadCsvFile";

export const useLoadFile = () => {
  const { importFileSettings } = useImportFileSettings();
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [loadFile, setLoadFile] = useState<string>("");
  const { encodingTo, encodingFrom, encodingType } = importFileSettings;

  useEffect(() => {
    const fn = async () => {
      if (!uploadFile) {
        setLoadFile("");
        return;
      }

      const readFile = await uploadFile.stream().getReader().read();
      const csv = decodeCsv(readFile, encodingTo, encodingFrom, encodingType);
      setLoadFile(csv);
    };
    void fn();
  }, [uploadFile]);

  return {
    onChange: setUploadFile,
    loadFile,
    setLoadFile,
  };
};
