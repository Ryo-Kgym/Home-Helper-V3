import { operateForNumeric } from "./operateForNumeric";

describe("operateForNumeric", () => {
  describe("value が undefined でない場合", () => {
    it.each`
      value    | operator   | filterValue | expected
      ${1}     | ${"eq"}    | ${"1"}      | ${true}
      ${2}     | ${"eq"}    | ${"1"}      | ${false}
      ${1}     | ${"neq"}   | ${"1"}      | ${false}
      ${2}     | ${"neq"}   | ${"1"}      | ${true}
      ${1}     | ${"lt"}    | ${"1"}      | ${false}
      ${2}     | ${"lt"}    | ${"1"}      | ${false}
      ${1}     | ${"lt"}    | ${"a"}      | ${false}
      ${"a"}   | ${"lt"}    | ${"b"}      | ${false}
      ${"a"}   | ${"lt"}    | ${"A"}      | ${false}
      ${1}     | ${"lte"}   | ${"1"}      | ${true}
      ${2}     | ${"lte"}   | ${"1"}      | ${false}
      ${1}     | ${"lte"}   | ${"a"}      | ${false}
      ${"a"}   | ${"lte"}   | ${"b"}      | ${false}
      ${"a"}   | ${"lte"}   | ${"A"}      | ${false}
      ${1}     | ${"gt"}    | ${"1"}      | ${false}
      ${2}     | ${"gt"}    | ${"1"}      | ${true}
      ${1}     | ${"gt"}    | ${"a"}      | ${false}
      ${"a"}   | ${"gt"}    | ${"b"}      | ${false}
      ${"a"}   | ${"gt"}    | ${"A"}      | ${false}
      ${1}     | ${"gte"}   | ${"1"}      | ${true}
      ${2}     | ${"gte"}   | ${"1"}      | ${true}
      ${1}     | ${"gte"}   | ${"a"}      | ${false}
      ${"a"}   | ${"gte"}   | ${"b"}      | ${false}
      ${"a"}   | ${"gte"}   | ${"A"}      | ${false}
      ${1}     | ${"in"}    | ${"1,2"}    | ${true}
      ${2}     | ${"in"}    | ${"1,2"}    | ${true}
      ${3}     | ${"in"}    | ${"1,2"}    | ${false}
      ${1}     | ${"nin"}   | ${"1,2"}    | ${false}
      ${2}     | ${"nin"}   | ${"1,2"}    | ${false}
      ${3}     | ${"nin"}   | ${"1,2"}    | ${true}
      ${"abc"} | ${"like"}  | ${"bc"}     | ${true}
      ${"abc"} | ${"like"}  | ${"cd"}     | ${false}
      ${"abc"} | ${"nlike"} | ${"bc"}     | ${false}
      ${"abc"} | ${"nlike"} | ${"cd"}     | ${true}
    `(
      "$value $operator $filterValue = $expected",
      ({ value, operator, filterValue, expected }) => {
        const actual = operateForNumeric(
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
});
