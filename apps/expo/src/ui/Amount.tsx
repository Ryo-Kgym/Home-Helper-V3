import { Text } from "react-native";

export const Amount = ({
  amount,
  iocomeType,
  size = "md",
}: {
  amount: number;
  iocomeType: string;
  size?: keyof typeof SizeType;
}) => (
  <Text
    className={`text-right ${SizeType[size]} ${
      iocomeType === "INCOME" ? "text-green-500" : "text-red-500"
    }`}
  >
    {amount.toLocaleString()}
  </Text>
);

const SizeType = {
  md: "text-xl",
  lg: "text-2xl",
};
