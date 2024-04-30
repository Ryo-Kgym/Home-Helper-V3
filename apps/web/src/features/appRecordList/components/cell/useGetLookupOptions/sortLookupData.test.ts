import { sortLookupData } from "@features/appRecordList/components/cell/useGetLookupOptions/sortLookupData";
import { Record } from "@oneforall/domain/schema/recordSchema";

describe("sortLookupData", () => {
  const r1: Record = {
    recordId: "",
    isEditing: false,
    columns: {
      f1: { fieldKind: "text", value: "a1" },
      f2: { fieldKind: "text", value: "a2" },
    },
  };
  const r2: Record = {
    recordId: "",
    isEditing: false,
    columns: {
      f1: { fieldKind: "text", value: "b1" },
      f2: { fieldKind: "text", value: "b2" },
    },
  };

  it.each`
    case                | a     | b     | sortDirection | expected
    ${"異なるレコード"} | ${r1} | ${r2} | ${"asc"}      | ${-1}
    ${"異なるレコード"} | ${r1} | ${r2} | ${"desc"}     | ${1}
    ${"同じレコード"}   | ${r1} | ${r1} | ${"asc"}      | ${0}
    ${"同じレコード"}   | ${r1} | ${r1} | ${"desc"}     | ${0}
  `(
    "$case で sortDirection: $sortDirection の場合",
    ({ a, b, sortDirection, expected }) => {
      const sortFieldId = "f1";
      const result = sortLookupData(a, b, sortFieldId, sortDirection);
      expect(result).toBe(expected);
    },
  );
});
