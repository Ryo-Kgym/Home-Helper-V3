import { useEffect } from "react";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { TagListRow } from "../types/tagListRow";

export const useStateSetTagList = (tagList: TagListRow[]) => {
  const set = useTagListZustand((store) => ({
    setTagList: store.setTagList,
  }));

  useEffect(
    () => {
      set.setTagList(tagList);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tagList],
  );
};

export const useStateTagList = () => {
  const get = useTagListZustand((store) => ({
    getTagList: store.getTagList,
  }));

  return get.getTagList();
};

export const useStateSetTag = () => {
  const set = useTagListZustand((store) => ({
    setTag: store.setTag,
  }));

  return set.setTag;
};

type State = {
  tagListObject: Record<string, TagListRow>;
};

type Actions = {
  getTagList: () => TagListRow[];
  setTagList: (tags: TagListRow[]) => void;
  setTag: (tag: TagListRow) => void;
};

const useTagListZustand = create<State & Actions>()(
  immer((set, get) => ({
    tagListObject: {},
    getTagList: () => Object.values(get().tagListObject),
    setTagList: (value) =>
      set((state) => {
        state.tagListObject = Object.fromEntries(
          value.map((tag) => [tag.id, tag]),
        );
      }),
    setTag: (tag) =>
      set((state) => {
        state.tagListObject[tag.id] = tag;
      }),
  })),
);
