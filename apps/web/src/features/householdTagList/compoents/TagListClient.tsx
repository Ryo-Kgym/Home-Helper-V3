"use client";

import { FC } from "react";

import { useStateSetTagList } from "../hooks/useStateTagList";
import { TagFrom } from "../types/tagForm";
import { TagListTable } from "./TagListTable";

type Props = {
  tags: TagFrom[];
};

export const TagListClient: FC<Props> = ({ tags }) => {
  void useStateSetTagList(tags);

  return (
    <div>
      <TagListTable />
    </div>
  );
};
