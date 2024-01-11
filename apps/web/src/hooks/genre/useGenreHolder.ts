/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useRecoilState } from "recoil";
import { genreState } from "@recoil/genreState";

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
