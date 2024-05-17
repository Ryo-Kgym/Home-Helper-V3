import type { CreditCard } from "~/types/credit-card";
import type { IocomeType } from "~/types/iocome-type";

export const getCreditCardName = (creditCard: CreditCard): string => {
  const keyValuePair: { [key in CreditCard]: string } = {
    AMAZON_CARD: "Amazonカード",
    AU_PAY_CARD: "Au Payカード",
    RAKUTEN_CARD: "楽天カード",
  };

  return keyValuePair[creditCard];
};

export const getCreditCardGenreName = () => "返済";

export const getCreditCardIocomeType = (): IocomeType => "OUTCOME";
