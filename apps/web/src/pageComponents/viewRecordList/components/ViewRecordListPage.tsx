import { Suspense } from "react";
import { recordFiltersSchema } from "@oneforall/domain/schema/filter/recordFiltersSchema";
import { parseToView } from "@v3/graphql/public/convert/parseToView";
import { GetViewRecordsSourceDocument } from "@v3/graphql/public/type";

import { Title } from "~/components/ui/v4/frame/Title";
import { TableLoading } from "~/components/ui/v4/loading/TableLoading";
import { PageClientFrame } from "~/components/ui/v4/PageClientFrame";
import { fetchQuery } from "~/persistence/database/server/fetchQuery";
import { RedirectViewSettingButton } from "../../../features/viewNav/RedirectViewSettingButton";
import { ViewRecordListServer } from "../../../features/viewRecordList/components/ViewRecordListServer";
import { OpenViewFilterButton } from "../../../features/viewRecordListFilter/components/OpenViewFilterButton";

export const ViewRecordListPage = async ({
  viewId,
  filterStr,
}: {
  viewId: string;
  filterStr: string | undefined;
}) => {
  const { data } = await fetchQuery(GetViewRecordsSourceDocument, {
    viewId,
  });

  const view = parseToView(data.view);

  const viewFilters = recordFiltersSchema.safeParse(
    JSON.parse(filterStr ?? "{}"),
  ).data;

  return (
    <PageClientFrame
      title={
        <Title title={view.name}>
          <RedirectViewSettingButton viewId={view.id} />
          <OpenViewFilterButton view={view} viewFilters={viewFilters} />
        </Title>
      }
    >
      <Suspense fallback={<TableLoading />}>
        <ViewRecordListServer
          view={view}
          viewData={data.view}
          filterStr={filterStr}
        />
      </Suspense>
    </PageClientFrame>
  );
};
