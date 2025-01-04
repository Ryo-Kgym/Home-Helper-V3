import { FragAllDetailViewFragment } from "@v3/graphql/household/schema/query/v5/fragChartDetailTable.generated";
import { GetAllDetailViewDocument } from "@v3/graphql/household/schema/query/v5/getAllDetailView.generated";

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { convertToDate } from "../../../function/date/convertToDate";
import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";
import { YYYY_MM_DD } from "../../../types/yyyyMMdd";
import { SearchRow } from "../types/searchRow";

type Params = {
  fromDate: YYYY_MM_DD;
  toDate: YYYY_MM_DD;
  tagIds: string[];
};

export const fetchDetails = async (params: Params) => {
  const { group } = await findUser();

  const { data } = await execQuery(GetAllDetailViewDocument, {
    groupId: group.id,
    fromDate: convertToDate(params.fromDate),
    toDate: convertToDate(params.toDate),
    tagIds: params.tagIds,
  });

  if (!data?.group) {
    return {
      records: [],
    };
  }

  if (params.tagIds.length > 0) {
    const duplicatedRecords = data.group.tags.flatMap((tag) =>
      tag.detailTags.flatMap((dt) => dt.details.map(converter)),
    );
    const uniqueIds = Array.from(new Set(duplicatedRecords.map((r) => r.id)));

    return {
      records: uniqueIds
        .map((id) => duplicatedRecords.find((r) => r.id === id)!)
        .sort((a, b) => b.settlementDate.localeCompare(a.settlementDate)),
    };
  }

  return {
    records: data.group.details.map(converter),
  };
};

const converter = (detail: FragAllDetailViewFragment): SearchRow => {
  return {
    id: detail.id ?? "",
    settlementDate: detail.settlementDate!,
    withdrawalDate: detail.withdrawalDate!,
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
    tags: detail.tags
      .sort((a, b) => a.tag.id.localeCompare(b.tag.id))
      .map((tag) => ({
        id: tag.id ?? "",
        name: tag.tag.name ?? "",
        colorCode: tag.tag.colorCode ?? "",
        displayOrder: tag.tag.displayOrder ?? 0,
      })),
  };
};
