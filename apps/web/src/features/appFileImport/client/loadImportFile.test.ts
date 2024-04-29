import { loadImportFile } from "@features/appFileImport/client/loadImportFile";
import * as readFileMock from "@features/appFileImport/client/readFile";
import * as splitRowsMock from "@features/appFileImport/client/splitRows";
import { ImportFileSettings } from "@oneforall/domain/schema/importFileSettingsSchema";
import * as loadCsvFileMock from "@provider/file/loader/csv/loadCsvFile";

jest.mock("@provider/file/loader/csv/loadCsvFile");

jest.spyOn(readFileMock, "readFile").mockResolvedValue({
  value: new Uint8Array([0x74, 0x65]),
  done: false,
});

const streamMock = jest.fn();
jest.mock("stream", () => ({
  ReadableStream: streamMock,
}));

describe("loadImportFile", () => {
  it("内部の関数に期待した引数が渡されること", async () => {
    const decodeCsvVerify = jest.fn();
    jest
      .spyOn(loadCsvFileMock, "decodeCsv")
      .mockImplementation(decodeCsvVerify);

    decodeCsvVerify.mockReturnValue("test,test");

    const separateRowsVerify = jest.fn();
    jest
      .spyOn(loadCsvFileMock, "separateRows")
      .mockImplementation(separateRowsVerify);

    separateRowsVerify.mockReturnValue(["test,test"]);

    const splitRowsVerify = jest.fn();
    jest.spyOn(splitRowsMock, "splitRows").mockImplementation(splitRowsVerify);

    splitRowsVerify.mockReturnValue([
      ["test11", "test12"],
      ["test21", "test22"],
    ]);

    const file = new File(["test"], "test.csv");

    const importFileSettings: ImportFileSettings = {
      encodingTo: "UTF8",
      encodingFrom: "UTF8",
      encodingType: "array",
      splitSeparator: "\n",
      headerRows: 1,
      footerRows: 1,
      splitter: ",",
      quotation: '"',
    };

    await loadImportFile(file, importFileSettings);

    expect(decodeCsvVerify).toHaveBeenCalledWith(
      {
        done: false,
        value: new Uint8Array([0x74, 0x65]),
      },
      "UTF8",
      "UTF8",
      "array",
    );
    expect(separateRowsVerify).toHaveBeenCalledWith("test,test", "\n", 1, 1);

    expect(splitRowsVerify).toHaveBeenCalledWith(["test,test"], ",", '"');
  });

  it("期待した値が返されること", async () => {
    jest
      .spyOn(loadCsvFileMock, "separateRows")
      .mockReturnValue(["test11,test12", "test21,test22", "test31,test32"]);

    jest.spyOn(splitRowsMock, "splitRows").mockReturnValue([
      ["test11", "test12"],
      ["test21", "test22"],
      ["test31", "test32"],
    ]);

    const file = new File(["test"], "test.csv");

    const importFileSettings: ImportFileSettings = {
      encodingTo: "UTF8",
      encodingFrom: "UTF8",
      encodingType: "array",
      splitSeparator: "\n",
      headerRows: 1,
      footerRows: 1,
      splitter: ",",
      quotation: '"',
    };

    const actual = await loadImportFile(file, importFileSettings);

    expect(actual).toEqual({
      data: [
        ["test11", "test12"],
        ["test21", "test22"],
        ["test31", "test32"],
      ],
      rowLength: 3,
    });
  });
});
