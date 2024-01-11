export interface AuPayCsvLine {
  user(): string;

  paymentType(): string;

  date(): Date;

  shopName(): string;

  price(): number;

  note(): string;
}

export const parseAuPayCsvLine = (line: string): AuPayCsvLine => {
  const splitLine = line.split(",");
  return {
    user: () => {
      return splitLine[0];
    },
    paymentType: () => {
      return splitLine[1];
    },
    date: () => {
      return new Date(splitLine[2]?.replaceAll("/", "-"));
    },
    shopName: () => {
      return splitLine[3];
    },
    price: () => {
      return Number(splitLine[4]);
    },
    note: () => {
      return splitLine[5];
    },
  };
};
