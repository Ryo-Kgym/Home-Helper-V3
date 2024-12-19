"use client";

import { FC } from "react";

import { useStateSetTagList } from "../hooks/useStateTagList";
import { TagListRow } from "../types/tagListRow";
import { TagAddForm } from "./TagAddForm";
import { TagListTable } from "./TagListTable";

type Props = {
  tags: TagListRow[];
};

export const TagListClient: FC<Props> = ({ tags }) => {
  void useStateSetTagList(tags);

  return (
    <div>
      <TagAddForm />
      <TagListTable />
    </div>
  );
};
