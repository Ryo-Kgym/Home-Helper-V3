export interface OitaBankCsvLine {
  number(): string;

  date(): Date;

  paymentPrice(): number | null;

  depositPrice(): number | null;

  transactionType(): string;

  note(): string;
}

export const parseOitaBankCsvLine = (line: string): OitaBankCsvLine => {
  const removeQuotationLine = line.split('","');
  removeQuotationLine.slice(0, 1);
  removeQuotationLine.slice(-2);

  const splitLine = removeQuotationLine.map((x) => x.replace(/"/g, ""));

  return {
    number: () => {
      return splitLine[0];
    },
    date: () => {
      const today = new Date();
      const monthDay = "-" + splitLine[2].replace("月", "-").replace("日", "");

      const tempDate = new Date(today.getFullYear().toString() + monthDay);

      return tempDate.getTime() > today.getTime()
        ? new Date((today.getFullYear() - 1).toString() + monthDay)
        : tempDate;
    },
    paymentPrice: () => {
      const num = splitLine[4].replace("\\", "").replaceAll(",", "");
      return num == "" ? null : Number(num);
    },
    depositPrice: () => {
      const num = splitLine[5].replace("\\", "").replaceAll(",", "");
      return num == "" ? null : Number(num);
    },
    transactionType: () => {
      return splitLine[7];
    },
    note: () => {
      return splitLine[9];
    },
  };
};
