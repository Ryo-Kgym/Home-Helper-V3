import { judgeComplexity } from "./judgeComplexity";

describe("judgeComplexity", () => {
  describe("要素が0つ", () => {
    it("empty => true", () => {
      const result = judgeComplexity([]);

      expect(result).toBeTruthy();
    });
  });

  describe("要素が1つ", () => {
    it.each`
      complexity | result   | expected
      ${"and"}   | ${true}  | ${true}
      ${"and"}   | ${false} | ${false}
      ${"or"}    | ${true}  | ${true}
      ${"or"}    | ${false} | ${false}
    `(
      "[{ complexity: $complexity, result: $result }] => $expected",
      ({ complexity, result, expected }) => {
        const actual = judgeComplexity([
          {
            complexity,
            result,
          },
        ]);

        expect(actual).toBe(expected);
      },
    );
  });

  describe("要素が2つ", () => {
    it.each`
      complexity0 | result0  | complexity1 | result1  | expected
      ${"and"}    | ${true}  | ${"and"}    | ${true}  | ${true}
      ${"and"}    | ${true}  | ${"and"}    | ${false} | ${false}
      ${"and"}    | ${false} | ${"and"}    | ${true}  | ${false}
      ${"and"}    | ${false} | ${"and"}    | ${false} | ${false}
      ${"and"}    | ${true}  | ${"or"}     | ${true}  | ${true}
      ${"and"}    | ${true}  | ${"or"}     | ${false} | ${true}
      ${"and"}    | ${false} | ${"or"}     | ${true}  | ${true}
      ${"and"}    | ${false} | ${"or"}     | ${false} | ${false}
      ${"or"}     | ${true}  | ${"and"}    | ${true}  | ${true}
      ${"or"}     | ${true}  | ${"and"}    | ${false} | ${false}
      ${"or"}     | ${false} | ${"and"}    | ${true}  | ${false}
      ${"or"}     | ${false} | ${"and"}    | ${false} | ${false}
      ${"or"}     | ${true}  | ${"or"}     | ${true}  | ${true}
      ${"or"}     | ${true}  | ${"or"}     | ${false} | ${true}
      ${"or"}     | ${false} | ${"or"}     | ${true}  | ${true}
      ${"or"}     | ${false} | ${"or"}     | ${false} | ${false}
    `(
      `[
          { complexity: $complexity0, result: $result0 }, 
          { complexity: $complexity1, result1: $result1 }
      ] => $expected`,
      ({ complexity0, result0, complexity1, result1, expected }) => {
        const actual = judgeComplexity([
          {
            complexity: complexity0,
            result: result0,
          },
          {
            complexity: complexity1,
            result: result1,
          },
        ]);

        expect(actual).toBe(expected);
      },
    );
  });
  describe("要素が3つ", () => {
    it.each`
      complexity0 | result0  | complexity1 | result1  | complexity2 | result2  | expected
      ${"and"}    | ${true}  | ${"and"}    | ${true}  | ${"and"}    | ${true}  | ${true}
      ${"and"}    | ${true}  | ${"and"}    | ${true}  | ${"and"}    | ${false} | ${false}
      ${"and"}    | ${true}  | ${"and"}    | ${true}  | ${"or"}     | ${true}  | ${true}
      ${"and"}    | ${true}  | ${"and"}    | ${true}  | ${"or"}     | ${false} | ${true}
      ${"and"}    | ${true}  | ${"and"}    | ${false} | ${"and"}    | ${true}  | ${false}
      ${"and"}    | ${true}  | ${"and"}    | ${false} | ${"and"}    | ${false} | ${false}
      ${"and"}    | ${true}  | ${"and"}    | ${false} | ${"or"}     | ${true}  | ${true}
      ${"and"}    | ${true}  | ${"and"}    | ${false} | ${"or"}     | ${false} | ${false}
      ${"and"}    | ${true}  | ${"or"}     | ${true}  | ${"and"}    | ${true}  | ${true}
      ${"and"}    | ${true}  | ${"or"}     | ${true}  | ${"and"}    | ${false} | ${false}
      ${"and"}    | ${true}  | ${"or"}     | ${true}  | ${"or"}     | ${true}  | ${true}
      ${"and"}    | ${true}  | ${"or"}     | ${true}  | ${"or"}     | ${false} | ${true}
      ${"and"}    | ${true}  | ${"or"}     | ${false} | ${"and"}    | ${true}  | ${true}
      ${"and"}    | ${true}  | ${"or"}     | ${false} | ${"and"}    | ${false} | ${false}
      ${"and"}    | ${true}  | ${"or"}     | ${false} | ${"or"}     | ${true}  | ${true}
      ${"and"}    | ${true}  | ${"or"}     | ${false} | ${"or"}     | ${false} | ${true}
      ${"and"}    | ${false} | ${"and"}    | ${true}  | ${"and"}    | ${true}  | ${false}
      ${"and"}    | ${false} | ${"and"}    | ${true}  | ${"and"}    | ${false} | ${false}
      ${"and"}    | ${false} | ${"and"}    | ${true}  | ${"or"}     | ${true}  | ${true}
      ${"and"}    | ${false} | ${"and"}    | ${true}  | ${"or"}     | ${false} | ${false}
      ${"and"}    | ${false} | ${"and"}    | ${false} | ${"and"}    | ${true}  | ${false}
      ${"and"}    | ${false} | ${"and"}    | ${false} | ${"and"}    | ${false} | ${false}
      ${"and"}    | ${false} | ${"and"}    | ${false} | ${"or"}     | ${true}  | ${true}
      ${"and"}    | ${false} | ${"and"}    | ${false} | ${"or"}     | ${false} | ${false}
      ${"and"}    | ${false} | ${"or"}     | ${true}  | ${"and"}    | ${true}  | ${true}
      ${"and"}    | ${false} | ${"or"}     | ${true}  | ${"and"}    | ${false} | ${false}
      ${"and"}    | ${false} | ${"or"}     | ${true}  | ${"or"}     | ${true}  | ${true}
      ${"and"}    | ${false} | ${"or"}     | ${true}  | ${"or"}     | ${false} | ${true}
      ${"and"}    | ${false} | ${"or"}     | ${false} | ${"and"}    | ${true}  | ${false}
      ${"and"}    | ${false} | ${"or"}     | ${false} | ${"and"}    | ${false} | ${false}
      ${"and"}    | ${false} | ${"or"}     | ${false} | ${"or"}     | ${true}  | ${true}
      ${"and"}    | ${false} | ${"or"}     | ${false} | ${"or"}     | ${false} | ${false}
      ${"or"}     | ${true}  | ${"and"}    | ${true}  | ${"and"}    | ${true}  | ${true}
      ${"or"}     | ${true}  | ${"and"}    | ${true}  | ${"and"}    | ${false} | ${false}
      ${"or"}     | ${true}  | ${"and"}    | ${true}  | ${"or"}     | ${true}  | ${true}
      ${"or"}     | ${true}  | ${"and"}    | ${true}  | ${"or"}     | ${false} | ${true}
      ${"or"}     | ${true}  | ${"and"}    | ${false} | ${"and"}    | ${true}  | ${false}
      ${"or"}     | ${true}  | ${"and"}    | ${false} | ${"and"}    | ${false} | ${false}
      ${"or"}     | ${true}  | ${"and"}    | ${false} | ${"or"}     | ${true}  | ${true}
      ${"or"}     | ${true}  | ${"and"}    | ${false} | ${"or"}     | ${false} | ${false}
      ${"or"}     | ${true}  | ${"or"}     | ${true}  | ${"and"}    | ${true}  | ${true}
      ${"or"}     | ${true}  | ${"or"}     | ${true}  | ${"and"}    | ${false} | ${false}
      ${"or"}     | ${true}  | ${"or"}     | ${true}  | ${"or"}     | ${true}  | ${true}
      ${"or"}     | ${true}  | ${"or"}     | ${true}  | ${"or"}     | ${false} | ${true}
      ${"or"}     | ${true}  | ${"or"}     | ${false} | ${"and"}    | ${true}  | ${true}
      ${"or"}     | ${true}  | ${"or"}     | ${false} | ${"and"}    | ${false} | ${false}
      ${"or"}     | ${true}  | ${"or"}     | ${false} | ${"or"}     | ${true}  | ${true}
      ${"or"}     | ${true}  | ${"or"}     | ${false} | ${"or"}     | ${false} | ${true}
      ${"or"}     | ${false} | ${"and"}    | ${true}  | ${"and"}    | ${true}  | ${false}
      ${"or"}     | ${false} | ${"and"}    | ${true}  | ${"and"}    | ${false} | ${false}
      ${"or"}     | ${false} | ${"and"}    | ${true}  | ${"or"}     | ${true}  | ${true}
      ${"or"}     | ${false} | ${"and"}    | ${true}  | ${"or"}     | ${false} | ${false}
      ${"or"}     | ${false} | ${"and"}    | ${false} | ${"and"}    | ${true}  | ${false}
      ${"or"}     | ${false} | ${"and"}    | ${false} | ${"and"}    | ${false} | ${false}
      ${"or"}     | ${false} | ${"and"}    | ${false} | ${"or"}     | ${true}  | ${true}
      ${"or"}     | ${false} | ${"and"}    | ${false} | ${"or"}     | ${false} | ${false}
      ${"or"}     | ${false} | ${"or"}     | ${true}  | ${"and"}    | ${true}  | ${true}
      ${"or"}     | ${false} | ${"or"}     | ${true}  | ${"and"}    | ${false} | ${false}
      ${"or"}     | ${false} | ${"or"}     | ${true}  | ${"or"}     | ${true}  | ${true}
      ${"or"}     | ${false} | ${"or"}     | ${true}  | ${"or"}     | ${false} | ${true}
      ${"or"}     | ${false} | ${"or"}     | ${false} | ${"and"}    | ${true}  | ${false}
      ${"or"}     | ${false} | ${"or"}     | ${false} | ${"and"}    | ${false} | ${false}
      ${"or"}     | ${false} | ${"or"}     | ${false} | ${"or"}     | ${true}  | ${true}
      ${"or"}     | ${false} | ${"or"}     | ${false} | ${"or"}     | ${false} | ${false}
    `(
      `[
          { complexity: $complexity0, result: $result0 }, 
          { complexity: $complexity1, result1: $result1 },
          { complexity: $complexity2, result1: $result2 },
      ] => $expected`,
      ({
        complexity0,
        result0,
        complexity1,
        result1,

        complexity2,
        result2,
        expected,
      }) => {
        const actual = judgeComplexity([
          {
            complexity: complexity0,
            result: result0,
          },
          {
            complexity: complexity1,
            result: result1,
          },
          {
            complexity: complexity2,
            result: result2,
          },
        ]);

        expect(actual).toBe(expected);
      },
    );
  });
});
