/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Segment } from "@components/atoms/Segment";
import { GenreType } from "@domain/model/household/GenreType";

type GenreTypeSegmentProps = {
  genreType: GenreType;
  setGenreType: (_: GenreType) => void;
  disabled?: boolean;
};
export const GenreTypeSegment = ({
  genreType,
  setGenreType,
  disabled = false,
}: GenreTypeSegmentProps) => {
  const onChange = (value: string) => {
    setGenreType(value as unknown as GenreType);
  };

  return (
    <Segment
      value={genreType}
      onChange={onChange}
      data={data}
      disabled={disabled}
    />
  );
};

const data = [
  { value: GenreType.FIXED, label: "固定" },
  { value: GenreType.FLUCTUATION, label: "変動" },
];
