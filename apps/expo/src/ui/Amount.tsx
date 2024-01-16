import { Text } from "react-native";

export const Amount = ({
  className = "",
  amount,
  iocomeType,
}: {
  className?: string;
  amount: number;
  iocomeType: string;
}) => (
  <Text
    className={`${className} ${
      iocomeType === "INCOME" ? "text-green-500" : "text-red-500"
    }`}
  >
    {amount.toLocaleString()}
  </Text>
);
