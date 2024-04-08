/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { genreState } from "@recoil/genreState";
import { useRecoilState } from "recoil";

export const useGenreHolder = () => {
  const [genre, setGenre] = useRecoilState(genreState);

  const save = ({ genreId: id }: { genreId: string }) => {
    setGenre({ id });
  };

  return {
    genreId: genre.id,
    save,
  };
};
