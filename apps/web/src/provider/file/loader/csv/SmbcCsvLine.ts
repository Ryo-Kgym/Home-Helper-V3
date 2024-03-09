export type SmbcCsvLine = {
  date(): Date;
  shopName(): string;
  price(): number;
  note(): string;
};

export const parseSmbcCsvLine = (line: string): SmbcCsvLine => {
  const splitLine = line.split(",");

  return {
    date: () => {
      return new Date(splitLine[0]!);
    },
    shopName: () => {
      return splitLine[1]!;
    },
    price: () => {
      return Number(splitLine[6]);
    },
    note: () => {
      return splitLine[5] ?? "";
    },
  };
};
