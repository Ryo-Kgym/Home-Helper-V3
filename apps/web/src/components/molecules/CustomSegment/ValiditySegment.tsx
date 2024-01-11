/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Segment } from "@components/atoms/Segment";

type ValiditySegmentProps = {
  isValid: boolean;
  setIsValid: (_: boolean) => void;
  disabled?: boolean;
};
export const ValiditySegment = ({
  isValid,
  setIsValid,
  disabled = false,
}: ValiditySegmentProps) => {
  const onChange = (value: string) => {
    setIsValid(value as unknown as boolean);
  };

  return (
    <Segment
      value={String(isValid)}
      onChange={onChange}
      data={data}
      disabled={disabled}
    />
  );
};

const data = [
  { value: "true", label: "有効" },
  { value: "false", label: "無効" },
];
