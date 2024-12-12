/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Select, SelectData } from "../../../ui";

type GenreSelectPresenterProps = {
  value: string | null;
  onChange: (_: string | null) => void;
  genres: SelectData[];
  disabled?: boolean;
};
/** @deprecated */
export const GenreSelectPresenter = ({
  value,
  onChange,
  genres,
  disabled = false,
}: GenreSelectPresenterProps) => (
  <Select
    label={"GENRE"}
    value={value}
    onChange={onChange}
    data={genres}
    placeholder={"ジャンルを選択してください"}
    withAsterisk
    disabled={disabled}
  />
);
