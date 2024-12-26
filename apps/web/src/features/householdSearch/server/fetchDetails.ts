import { GetAllDetailViewDocument } from "@v3/graphql/household/type";

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";
import { YYYY_MM_DD } from "../../../types/yyyyMMdd";
import { SearchRow } from "../types/searchRow";

type Params = {
  fromDate: YYYY_MM_DD;
  toDate: YYYY_MM_DD;
};

export const fetchDetails = async (params: Params) => {
  const { group } = await findUser();

  const { data } = await execQuery(GetAllDetailViewDocument, {
    groupId: group.id,
    fromDate: params.fromDate,
    toDate: params.toDate,
  });

  if (!data?.group) {
    return {
      records: [],
    };
  }

  return {
    records: data.group.details.map((detail) => ({
      id: detail.id ?? "",
      settlementDate: detail.settlementDate ?? "",
      withdrawalDate: detail.withdrawalDate ?? "",
      type: detail.type ?? "",
      amount: detail.amount ?? 0,
      account: {
        id: detail.account?.id ?? "",
        name: detail.account?.name ?? "",
      },
      genre: {
        id: detail.genre?.id ?? "",
        name: detail.genre?.name ?? "",
        iocomeType: detail.iocomeType as IocomeType,
      },
      category: {
        id: detail.category?.id ?? "",
        name: detail.category?.name ?? "",
      },
      memo: detail.memo ?? "",
      tags: detail.tags.map((tag) => ({
        id: tag.tag.id ?? "",
        name: tag.tag.name ?? "",
        colorCode: tag.tag.colorCode ?? "",
      })),
    })) satisfies SearchRow[],
  };
};
