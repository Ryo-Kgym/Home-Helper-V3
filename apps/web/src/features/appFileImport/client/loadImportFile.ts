import type { ImportFileSettings } from "@oneforall/domain/schema/recordSchema";
import { readFile } from "@features/appFileImport/client/readFile";
import { splitRows } from "@features/appFileImport/client/splitRows";
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
    quotation,
  } = importFileSettings;

  const readResult = await readFile(file);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const csv = decodeCsv(readResult, encodingTo, encodingFrom, encodingType);
  const rows = separateRows(csv, splitSeparator, headerRows, footerRows);
  const data = splitRows(rows, splitter, quotation);

  return { data, rowLength: rows.length };
};
