/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { NumberInput } from "@components/atoms/NumberInput";

export const DisplayOrderInputPresenter = ({
  value,
  onChange,
  disabled = false,
}: {
  value: number | "";
  onChange: (_: number | "") => void;
  disabled?: boolean;
}) => (
  <NumberInput
    label={""}
    value={value}
    onChange={onChange}
    placeholder="0 - 9999"
    withAsterisk={true}
    disabled={disabled}
  />
);
