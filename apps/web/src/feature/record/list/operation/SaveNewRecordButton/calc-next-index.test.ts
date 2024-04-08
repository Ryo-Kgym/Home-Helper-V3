import { calcNextIndex } from "./calc-next-index";

import type { Records } from "@feature/app/schema";


describe("calcNextIndex", () => {
  it("レコードオブジェクトが空の場合、1を返す", () => {
    const records: Records = {};
    expect(calcNextIndex(records)).toBe(1);
  });

  it("レコードオブジェクトに複数のエントリがある場合、次のインデックスを返す", () => {
    const records: Records = {
      "1": {
        recordId: "1",
        columns: {},
        isEditing: false,
      },
      "2": {
        recordId: "2",
        columns: {},
        isEditing: false,
      },
      "3": {
        recordId: "3",
        columns: {},
        isEditing: false,
      },
    };
    expect(calcNextIndex(records)).toBe(4);
  });

  it("レコードオブジェクトのキーが連続していない場合、次のインデックスを返す", () => {
    const records: Records = {
      "1": {
        recordId: "1",
        columns: {},
        isEditing: false,
      },
      "3": {
        recordId: "3",
        columns: {},
        isEditing: false,
      },
      "5": {
        recordId: "5",
        columns: {},
        isEditing: false,
      },
    };
    expect(calcNextIndex(records)).toBe(6);
  });
});
