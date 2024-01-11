/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Status } from "../";

type Props = {
  value: boolean;
};
export const ValidityStatus = ({ value }: Props) => {
  return <Status value={value ? "有効" : "無効"} rule={colorMap} />;
};

const colorMap = new Map([
  ["有効", "bg-green-300"],
  ["無効", "bg-red-300"],
]);
