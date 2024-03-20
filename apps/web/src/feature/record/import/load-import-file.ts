import type { ImportFileSettings } from "@feature/app/schema";
import { decodeCsv, separateRows } from "@provider/file/loader/csv/loadCsvFile";

export const loadImportFile = async (
  file: File,
  importFileSettings: ImportFileSettings,
) => {
  const {
    encodingTo,
    encodingFrom,
    encodingType,
    splitSeparator,
    headerRows,
    footerRows,
    splitter,
  } = importFileSettings;

  const readFile = await file.stream().getReader().read();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const csv = decodeCsv(readFile, encodingTo, encodingFrom, encodingType);
  const rows = separateRows(csv, splitSeparator, headerRows, footerRows);
  const data = rows.map((r) => r.split(splitter));

  return { data, rowLength: rows.length };
};
