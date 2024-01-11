import { NumberInput } from "@components/atoms/NumberInput";

type AmountInputPresenterProps = {
  value: number | "";
  onChange: (_: number | "") => void;
  disabled?: boolean;
};
export const AmountInputPresenter = ({
  value,
  onChange,
  disabled = false,
}: AmountInputPresenterProps) => (
  <NumberInput
    label={"Amount"}
    value={value}
    onChange={onChange}
    placeholder="0 - 999,999,999"
    withAsterisk={true}
    disabled={disabled}
  />
);
