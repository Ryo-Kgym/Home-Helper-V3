import { ComponentProps } from "react";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { SelectProps } from "../../../components/ui/select/v4";
import { TagInput } from "../../../components/ui/tag/TagInput";
import { IocomeType } from "../../../domain/model/household/IocomeType";

export const useSetDetailMaster = () => {
  const { setAccountData, setGenreData, setCategoryData, setTagData } =
    useDetailMasterZustand();
  return { setAccountData, setGenreData, setCategoryData, setTagData };
};

export const useGetDetailMaster = () => {
  const { getAccounts, getGenres, getCategories, getTags } =
    useDetailMasterZustand();
  return { getAccounts, getGenres, getCategories, getTags };
};

type State = {
  accountData: SelectProps<string>["data"];
  genreData: Record<IocomeType, SelectProps<string>["data"]>;
  categoryData: Record<string, SelectProps<string>["data"]>;
  tagData: ComponentProps<typeof TagInput>["data"];
};

type Actions = {
  setAccountData: (data: SelectProps<string>["data"]) => void;
  setGenreData: (data: Record<IocomeType, SelectProps<string>["data"]>) => void;
  setCategoryData: (data: Record<string, SelectProps<string>["data"]>) => void;
  setTagData: (data: ComponentProps<typeof TagInput>["data"]) => void;
  getAccounts: () => SelectProps<string>["data"];
  getGenres: (type: IocomeType) => SelectProps<string>["data"];
  getCategories: (genreId: string) => SelectProps<string>["data"];
  getTags: () => ComponentProps<typeof TagInput>["data"];
};

const useDetailMasterZustand = create<State & Actions>()(
  immer((set, get) => ({
    accountData: [],
    genreData: {
      [IocomeType.Income]: [],
      [IocomeType.Outcome]: [],
    },
    categoryData: {},
    tagData: [],
    setAccountData: (data) =>
      set((state) => {
        state.accountData = data;
      }),
    setGenreData: (data) =>
      set((state) => {
        state.genreData = data;
      }),
    setCategoryData: (data) =>
      set((state) => {
        state.categoryData = data;
      }),
    setTagData: (data) =>
      set((state) => {
        state.tagData = data;
      }),
    getAccounts: () => get().accountData,
    getGenres: (type) => get().genreData[type],
    getCategories: (genreId) => get().categoryData[genreId] ?? [],
    getTags: () => get().tagData,
  })),
);
