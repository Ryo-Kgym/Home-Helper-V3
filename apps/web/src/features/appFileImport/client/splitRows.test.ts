import { splitRows } from "@features/appFileImport/client/splitRows";

describe("splitRows", () => {
  it("期待した変換がされること", () => {
    const rows = ["a,b,c", '"d","e","f"'];
    const splitter = ",";
    const quotation = '"';
    const result = splitRows(rows, splitter, quotation);
    expect(result).toEqual([
      ["a", "b", "c"],
      ["d", "e", "f"],
    ]);
  });
});
