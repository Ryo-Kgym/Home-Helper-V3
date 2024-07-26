import { useEffect, useState } from "react";
import { FileType } from "@provider/file/FileType";
import { getSetting } from "@provider/file/loader/csv/CsvFileSetting";
import { decodeCsv } from "@provider/file/loader/csv/loadCsvFile";

export const useLoadFile = () => {
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [loadFile, setLoadFile] = useState<string>("");
  const fileType = FileType.AU_PAY_CSV;
  const { encodingTo, encodingFrom, encodingType } = getSetting(fileType);

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
