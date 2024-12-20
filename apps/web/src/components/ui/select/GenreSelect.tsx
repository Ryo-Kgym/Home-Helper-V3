import { useEffect, useState } from "react";

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { Select } from "../index";
import { fetchGenreList } from "./fetchGenreList";
import { SelectProps } from "./v4";

export const GenreSelect = ({
  genreId,
  setGenreId,
  iocomeType,
  disabled,
  withLabel = false,
}: {
  genreId: string | null;
  setGenreId: (_: string | null) => void;
  iocomeType: IocomeType;
  disabled?: boolean;
  withLabel?: boolean;
}) => {
  const [options, setOptions] = useState<SelectProps<string>["data"]>([]);

  useEffect(() => {
    void (async () => {
      const { genres } = await fetchGenreList({ iocomeType });
      setOptions(genres);
    })();
  }, [iocomeType]);

  return (
    <Select
      label={withLabel ? "ジャンル" : ""}
      value={genreId}
      onChange={setGenreId}
      data={options}
      placeholder={"ジャンルを選択してください"}
      withAsterisk
      size={"xs"}
      disabled={disabled}
    />
  );
};
