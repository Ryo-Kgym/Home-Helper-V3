export const formatThousandSeparator = (value: string, position: number) => {
  if (isNaN(Number(value))) {
    throw new Error("value is not a number.");
  }

  if (position === 0) {
    return value;
  }

  const [integerPart, decimalPart] = value.split(".");
  const integerPartWithComma = integerPart!.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ",",
  );
  if (decimalPart) {
    return `${integerPartWithComma}.${decimalPart}`;
  }

  return integerPartWithComma;
};
