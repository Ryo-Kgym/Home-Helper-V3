import { GetAllCategoriesDocument } from "@v3/graphql/household/schema/query/get/GetAllCategories.generated";

import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";
import { CategoryListContainer } from "./CategoryListContainer";

export const CategoryListServer = async () => {
  const { group } = await findUser();
  const { data } = await execQuery(GetAllCategoriesDocument, {
    groupId: group.id,
  });

  const categoryList = data.categories.map((category) => ({
    id: category.id,
    categoryName: category.categoryName,
    genreName: category.genre.genreName,
    validFlag: category.validFlag ?? true,
    displayOrder: category.displayOrder,
  }));

  return <CategoryListContainer categoryList={categoryList} />;
};
