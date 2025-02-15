"use client";

import { useGetAllCategoriesQuery } from "@v3/graphql/household";
import { useRouter } from "next/navigation";

import { ValidityStatus } from "../../../components/atoms";
import { TableProps } from "../../../components/atoms/Table";
import { useGroup } from "../../../hooks/group/useGroup";
import { CategoryListPresenter } from "./CategoryListPresenter";

export const CategoryListContainer = () => {
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

  return <CategoryListPresenter tablePropsList={tablePropsList} />;
};
