import type { CsvFileSetting } from "@provider/file/loader/csv/CsvFileSetting";
import { decodeCsv, separateRows } from "@provider/file/loader/csv/loadCsvFile";

export const loadImportFile = async (
  file: File,
  importFileSettings: CsvFileSetting,
) => {
  const {
    encodingTo,
    encodingFrom,
    encodingType,
    splitSeparator,
    headerRows,
    footerRows,
  } = importFileSettings;

  const readFile = await file.stream().getReader().read();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const csv = decodeCsv(readFile, encodingTo, encodingFrom, encodingType);
  const rows = separateRows(csv, splitSeparator, headerRows, footerRows);
  const data = rows.map((r) => r.split(","));

  return { data, rowLength: rows.length };
};
