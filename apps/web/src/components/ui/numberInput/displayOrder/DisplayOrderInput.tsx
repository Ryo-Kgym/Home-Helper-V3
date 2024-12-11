import { NumberInputContainer } from "../v5/NumberInputContainer";

export const DisplayOrderInput = ({
  value,
  onChange,
  disabled = false,
}: {
  value: number | "";
  onChange: (_: number | "") => void;
  disabled?: boolean;
}) => (
  <NumberInputContainer
    label={""}
    value={value}
    onChange={onChange}
    placeholder="0 - 9999"
    withAsterisk={true}
    disabled={disabled}
  />
);
