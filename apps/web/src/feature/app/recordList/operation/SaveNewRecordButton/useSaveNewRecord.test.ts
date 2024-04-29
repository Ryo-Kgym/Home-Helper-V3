import * as generateId from "@feature/app/function/generateId";
import * as calcNextIndex from "@feature/app/recordList/operation/SaveNewRecordButton/calc-next-index";
import { useSaveNewRecord } from "@feature/app/recordList/operation/SaveNewRecordButton/useSaveNewRecord";
import * as useNewRecordState from "@feature/app/recordList/operation/useNewRecordState";
import * as useModeState from "@feature/app/recordList/useModeState";
import * as useRecordsState from "@feature/app/recordList/useRecordsState";
import { Columns } from "@oneforall/domain/schema/recordSchema";
import { act, renderHook } from "@testing-library/react";
import * as mut from "@v3/graphql/public";

jest.mock("@v3/graphql/public");
jest.mock("@feature/app/function/generateId");
jest.mock(
  "@feature/app/recordList/operation/SaveNewRecordButton/calc-next-index",
);
jest.mock("@feature/app/recordList/useRecordsState");
jest.mock("@feature/app/recordList/useModeState");
jest.mock("@feature/app/recordList/operation/useNewRecordState");

describe("useSaveNewRecord", () => {
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

  it("新しいレコードを保存する", async () => {
    const { mutMock, addMock, resetNewRecordMock, resetModeMock } = setupMock();
    mutMock.mockResolvedValue({ data: { insertRecordOne: null } });

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
    expect(resetNewRecordMock).toHaveBeenCalled();
    expect(resetModeMock).toHaveBeenCalled();
  });

  it("レコードの保存に失敗した場合、例外を投げる", async () => {
    const { mutMock, addMock, resetNewRecordMock, resetModeMock } = setupMock();
    const error = new Error("error");
    mutMock.mockResolvedValue({ error });

    const { saveNewRecord } = renderHook(() => useSaveNewRecord(appId)).result
      .current;

    await expect(saveNewRecord(columns)).rejects.toThrow(error);

    expect(mutMock).toHaveBeenCalledWith({
      id: recordId,
      appId,
      index,
      columns,
    });
    expect(addMock).not.toHaveBeenCalled();
    expect(resetNewRecordMock).not.toHaveBeenCalled();
    expect(resetModeMock).not.toHaveBeenCalled();
  });

  const setupMock = () => {
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

    return { mutMock, addMock, resetNewRecordMock, resetModeMock };
  };
});
