import { operate } from "./operate";
import * as operateForNumeric from "./operateForNumeric";

describe("operate", () => {
  it("filedKind が numeric の場合は operateForNumeric を呼び出す", () => {
    const filter = {
      fieldId: "id",
      fieldKind: "numeric",
      operator: "eq",
      value: "1",
      filterComplexity: "and",
    } as const;
    const value = "1";
    const operateForNumericSpy = jest.spyOn(
      operateForNumeric,
      "operateForNumeric",
    );

    operate(filter, value);

    expect(operateForNumericSpy).toHaveBeenCalledWith(filter, Number(value));
  });

  describe("value が undefined でない場合", () => {
    it.each`
      value    | operator   | filterValue | expected
      ${"1"}   | ${"eq"}    | ${"1"}      | ${true}
      ${"2"}   | ${"eq"}    | ${"1"}      | ${false}
      ${"1"}   | ${"neq"}   | ${"1"}      | ${false}
      ${"2"}   | ${"neq"}   | ${"1"}      | ${true}
      ${"1"}   | ${"lt"}    | ${"1"}      | ${false}
      ${"2"}   | ${"lt"}    | ${"1"}      | ${false}
      ${"1"}   | ${"lt"}    | ${"a"}      | ${true}
      ${"a"}   | ${"lt"}    | ${"b"}      | ${true}
      ${"a"}   | ${"lt"}    | ${"A"}      | ${false}
      ${"1"}   | ${"lte"}   | ${"1"}      | ${true}
      ${"2"}   | ${"lte"}   | ${"1"}      | ${false}
      ${"1"}   | ${"lte"}   | ${"a"}      | ${true}
      ${"a"}   | ${"lte"}   | ${"b"}      | ${true}
      ${"a"}   | ${"lte"}   | ${"A"}      | ${false}
      ${"1"}   | ${"gt"}    | ${"1"}      | ${false}
      ${"2"}   | ${"gt"}    | ${"1"}      | ${true}
      ${"1"}   | ${"gt"}    | ${"a"}      | ${false}
      ${"a"}   | ${"gt"}    | ${"b"}      | ${false}
      ${"a"}   | ${"gt"}    | ${"A"}      | ${true}
      ${"1"}   | ${"gte"}   | ${"1"}      | ${true}
      ${"2"}   | ${"gte"}   | ${"1"}      | ${true}
      ${"1"}   | ${"gte"}   | ${"a"}      | ${false}
      ${"a"}   | ${"gte"}   | ${"b"}      | ${false}
      ${"a"}   | ${"gte"}   | ${"A"}      | ${true}
      ${"1"}   | ${"in"}    | ${"1,2"}    | ${true}
      ${"2"}   | ${"in"}    | ${"1,2"}    | ${true}
      ${"3"}   | ${"in"}    | ${"1,2"}    | ${false}
      ${"1"}   | ${"nin"}   | ${"1,2"}    | ${false}
      ${"2"}   | ${"nin"}   | ${"1,2"}    | ${false}
      ${"3"}   | ${"nin"}   | ${"1,2"}    | ${true}
      ${"abc"} | ${"like"}  | ${"bc"}     | ${true}
      ${"abc"} | ${"like"}  | ${"cd"}     | ${false}
      ${"abc"} | ${"nlike"} | ${"bc"}     | ${false}
      ${"abc"} | ${"nlike"} | ${"cd"}     | ${true}
    `(
      "$value $operator $filterValue = $expected",
      ({ value, operator, filterValue, expected }) => {
        const actual = operate(
          // @ts-expect-error テスト用に ViewFilter を直接生成
          {
            operator,
            value: filterValue,
          },
          value,
        );

        expect(actual).toBe(expected);
      },
    );
  });

  describe("value が undefined の場合", () => {
    it.each`
      operator   | filterValue | expected
      ${"eq"}    | ${"1"}      | ${false}
      ${"neq"}   | ${"1"}      | ${true}
      ${"lt"}    | ${"1"}      | ${true}
      ${"lte"}   | ${"1"}      | ${true}
      ${"gt"}    | ${"1"}      | ${false}
      ${"gte"}   | ${"1"}      | ${false}
      ${"in"}    | ${"1,2"}    | ${false}
      ${"nin"}   | ${"1,2"}    | ${true}
      ${"like"}  | ${"bc"}     | ${false}
      ${"nlike"} | ${"bc"}     | ${true}
    `(
      "value: undefined と $filterValue を $operator で演算した結果が $expected であること",
      ({ operator, filterValue, expected }) => {
        const actual = operate(
          // @ts-expect-error テスト用に ViewFilter を直接生成
          {
            operator,
            value: filterValue,
          },
          undefined,
        );

        expect(actual).toBe(expected);
      },
    );
  });
});
