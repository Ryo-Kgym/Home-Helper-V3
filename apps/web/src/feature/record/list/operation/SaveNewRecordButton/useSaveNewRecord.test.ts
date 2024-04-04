import type { Columns } from "@feature/app/schema";
import * as generateId from "@feature/app/function/generate-id";
import * as calcNextIndex from "@feature/record/list/operation/SaveNewRecordButton/calc-next-index";
import { useSaveNewRecord } from "@feature/record/list/operation/SaveNewRecordButton/useSaveNewRecord";
import * as useNewRecordState from "@feature/record/list/operation/useNewRecordState";
import * as useModeState from "@feature/record/list/useModeState";
import * as useRecordsState from "@feature/record/list/useRecordsState";
import { act, renderHook } from "@testing-library/react-hooks";
import * as mut from "@v3/graphql/public";

jest.mock("@v3/graphql/public");
jest.mock("@feature/app/function/generate-id");
jest.mock("@feature/record/list/operation/SaveNewRecordButton/calc-next-index");
jest.mock("@feature/record/list/useRecordsState");
jest.mock("@feature/record/list/useModeState");
jest.mock("@feature/record/list/operation/useNewRecordState");

describe("useSaveNewRecord", () => {
  it("新しいレコードを保存する", async () => {
    const appId = "123";
    const columns: Columns = {
      "1": {
        fieldKind: "text",
        value: "testValue",
      },
      "2": {
        fieldKind: "selectBox",
        value: "testValue",
        options: { label: "testLabel" },
      },
    };
    const recordId = "12345";
    const index = 3;

    const mutMock = jest.fn();
    const addMock = jest.fn();
    const resetNewRecordMock = jest.fn();
    const resetModeMock = jest.fn();

    jest.spyOn(calcNextIndex, "calcNextIndex").mockReturnValue(3);
    jest.spyOn(generateId, "generateId").mockReturnValue("12345");

    jest.spyOn(useRecordsState, "useRecords").mockReturnValue({
      records: {},
      setRecords: jest.fn(),
    });
    jest.spyOn(useModeState, "useResetMode").mockReturnValue(resetModeMock);
    jest
      .spyOn(useNewRecordState, "useResetNewRecord")
      .mockReturnValue(resetNewRecordMock);

    jest.spyOn(useRecordsState, "useAddRecord").mockReturnValue(addMock);
    jest.spyOn(mut, "useInsertRecordMutation").mockReturnValue([
      {
        data: {
          insertRecordOne: null,
        },
        fetching: false,
        stale: true,
      },
      mutMock,
    ]);

    const { saveNewRecord } = renderHook(() => useSaveNewRecord(appId)).result
      .current;

    await act(() => saveNewRecord(columns));

    expect(mutMock).toHaveBeenCalledWith({
      id: recordId,
      appId,
      index,
      columns,
    });
    expect(addMock).toHaveBeenCalledWith(index, {
      recordId,
      columns,
      isEditing: false,
    });
  });
});
