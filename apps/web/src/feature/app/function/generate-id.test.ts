import { describe, expect, it } from "@jest/globals";

import * as target from "./generate-id";

jest.spyOn(Date.prototype, "getTime").mockReturnValue(1234567890);

describe("generateId", () => {
  it("IDが発行されること(seqの指定なし)", () => {
    expect(target.generateId()).toBe("1234567890");
  });

  it("IDが発行されること(seqの指定あり)", () => {
    expect(target.generateId(1)).toBe("1234567891");
  });
});

describe("generateIds", () => {
  it("引数のオブジェクトの要素分のIDが発行されること", () => {
    expect(target.generateIds({ a: 1, b: 2 })).toEqual([
      "1234567890",
      "1234567891",
    ]);
  });

  it("引数のオブジェクトが空の場合、空の配列が返されること", () => {
    expect(target.generateIds({})).toEqual([]);
  });
});
