/*
 * Copyright (c) 2024 Ryo-Kgym.
 */
"use client";

import { ValidityStatus } from "@components/atoms";
import { Presenter_ } from "@components/page/CategoryList/Presenter";
import { useGroup } from "@hooks/group/useGroup";
import { useGetAllCategoriesQuery } from "@v3/graphql/household";
import { useRouter } from "next/navigation";

import type { TableProps } from "@components/atoms/Table";

export const Container_ = () => {
  const { push } = useRouter();
  const { groupId } = useGroup();
  const [{ data, fetching }] = useGetAllCategoriesQuery({
    variables: {
      groupId,
    },
  });

  if (fetching) return <div>Loading....</div>;

  const tablePropsList: TableProps[] =
    data?.categories.map(
      ({
        id: categoryId,
        categoryName,
        displayOrder,
        validFlag,
        genre: { genreName },
      }) => ({
        keyPrefix: "category",
        columns: [
          { value: categoryName },
          { value: genreName },
          {
            value: <ValidityStatus value={validFlag ?? true} />,
            align: "center",
          },
          { value: displayOrder, align: "right" },
        ],
        onClick: () => {
          push(`/household/setting/category/edit/${categoryId}`);
        },
      }),
    ) ?? [];

  return <Presenter_ tablePropsList={tablePropsList} />;
};
