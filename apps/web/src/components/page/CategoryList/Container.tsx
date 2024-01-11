/*
 * Copyright (c) 2024 Ryo-Kgym.
 */
"use client";

import { TableProps } from "@components/atoms/Table";
import { useGetAllCategoriesQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useGroup } from "@hooks/group/useGroup";
import { ValidityStatus } from "@components/atoms";
import { useRouter } from "next/navigation";
import { Presenter_ } from "@components/page/CategoryList/Presenter";

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
