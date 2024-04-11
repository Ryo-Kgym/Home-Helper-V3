import * as generateId from "@feature/view/function/generate-id";
import * as calcNextIndex from "@feature/view/recordList/operation/SaveNewRecordButton/calc-next-index";
import { useSaveNewRecord } from "@feature/view/recordList/operation/SaveNewRecordButton/useSaveNewRecord";
import * as useNewRecordState from "@feature/view/recordList/operation/useNewRecordState";
import * as useModeState from "@feature/view/recordList/useModeState";
import * as useRecordsState from "@feature/view/recordList/useRecordsState";
import { Columns } from "@oneforall/domain/schema";
import { act, renderHook } from "@testing-library/react";
import * as mut from "@v3/graphql/public";

jest.mock("@v3/graphql/public");
jest.mock("@feature/view/function/generate-id");
jest.mock(
  "@feature/view/recordList/operation/SaveNewRecordButton/calc-next-index",
);
jest.mock("@feature/view/recordList/useRecordsState");
jest.mock("@feature/view/recordList/useModeState");
jest.mock("@feature/view/recordList/operation/useNewRecordState");

describe("useSaveNewRecord", () => {
  const viewId = "123";
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

    const { saveNewRecord } = renderHook(() => useSaveNewRecord(viewId)).result
      .current;

    await act(() => saveNewRecord(columns));

    expect(mutMock).toHaveBeenCalledWith({
      id: recordId,
      viewId,
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

    const { saveNewRecord } = renderHook(() => useSaveNewRecord(viewId)).result
      .current;

    await expect(saveNewRecord(columns)).rejects.toThrow(error);

    expect(mutMock).toHaveBeenCalledWith({
      id: recordId,
      viewId,
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
