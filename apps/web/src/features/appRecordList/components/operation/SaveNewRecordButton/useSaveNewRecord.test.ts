import * as generateId from "@feature/app/function/generateId";
import * as calcNextIndex from "@features/appRecordList/components/operation/SaveNewRecordButton/calc-next-index";
import { useSaveNewRecord } from "@features/appRecordList/components/operation/SaveNewRecordButton/useSaveNewRecord";
import * as useResetNewRecordMock from "@hooks/states/app/record/useResetNewRecord";
import * as useModeState from "@hooks/states/app/recordListMode/useModeStateZustand";
import * as useAddRecordsMock from "@hooks/states/app/records/useAddRecord";
import * as useRecordsMock from "@hooks/states/app/records/useRecords";
import { RecordColumns } from "@oneforall/domain/schema/recordSchema";
import { act, renderHook } from "@testing-library/react";
import * as mut from "@v3/graphql/public";

jest.mock("@v3/graphql/public");
jest.mock("@feature/app/function/generateId");
jest.mock(
  "@features/appRecordList/components/operation/SaveNewRecordButton/calc-next-index",
);
jest.mock("@hooks/states/app/records/useRecordsZustand");
jest.mock("@hooks/states/app/recordListMode/useModeStateZustand");
jest.mock("@hooks/states/app/record/useNewRecordZustand");

describe("useSaveNewRecord", () => {
  const appId = "123";
  const columns: RecordColumns = {
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

    jest.spyOn(useRecordsMock, "useRecords").mockReturnValue({
      records: {},
      setRecords: jest.fn(),
    });
    jest.spyOn(useModeState, "useResetMode").mockReturnValue(resetModeMock);
    jest
      .spyOn(useResetNewRecordMock, "useResetNewRecord")
      .mockReturnValue(resetNewRecordMock);

    jest.spyOn(useAddRecordsMock, "useAddRecord").mockReturnValue(addMock);
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
