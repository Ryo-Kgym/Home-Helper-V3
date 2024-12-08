import { selectSingleFile } from "./selectSingleFile";

describe("selectSingleFile", () => {
  it("ファイルが存在しないとき", () => {
    const event: React.ChangeEvent<HTMLInputElement> = {
      // @ts-expect-error mock
      currentTarget: {
        files: null,
      },
    };
    const actual = selectSingleFile(event);
    expect(actual).toEqual({
      file: null,
      isEmpty: true,
    });
  });

  it("ファイルが存在するが、選択せずに、終了したとき", () => {
    const event: React.ChangeEvent<HTMLInputElement> = {
      // @ts-expect-error mock
      currentTarget: {
        files: {
          length: 1,
          item: () => null,
          [Symbol.iterator]: () => [][Symbol.iterator](),
        },
      },
    };
    const actual = selectSingleFile(event);
    expect(actual).toEqual({
      file: null,
      isEmpty: true,
    });
  });

  it("ファイルが存在し、選択した時、先頭を返す", () => {
    const testData: React.ChangeEvent<HTMLInputElement> = {
      // @ts-expect-error mock
      currentTarget: {
        files: {
          0: new File(["a"], "filename1", { type: "text/plain" }),
          1: new File(["b"], "filename2", { type: "text/plain" }),
          length: 1,
          item: () => new File([""], "filename1", { type: "text/plain" }),
          [Symbol.iterator]: () => [][Symbol.iterator](),
        },
      },
    };
    const actual = selectSingleFile(testData);
    expect(actual).toEqual({
      file: new File(["a"], "filename1", { type: "text/plain" }),
      isEmpty: false,
    });
  });
});
