import { Suspense } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { TableLoading } from "@components/ui/v4/loading/TableLoading";
import { PageClientFrame } from "@components/ui/v4/PageClientFrame";
import { AddRecordButton } from "@feature/app/nav/AddRecordButton";
import { RedirectChartButton } from "@feature/app/nav/RedirectChartButton";
import { RedirectImportButton } from "@feature/app/nav/RedirectImportButton";
import { RedirectSettingButton } from "@feature/app/nav/RedirectSettingButton";
import { RecordListTableByLinkDatabaseServer } from "@features/appRecordList/components/table/RecordListTableByLinkDatabaseServer";
import { RecordListTableByRecordsServer } from "@features/appRecordList/components/table/RecordListTableByRecordsServer";
import { makeColumnsTemplate } from "@features/appRecordList/server/makeColumnsTemplate";
import { makeHeaderItems } from "@features/appRecordList/server/makeHeaderItems";
import { linkDatabaseSchema } from "@oneforall/domain/schema/linkDatabase/linkDatabaseSchema";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { parseToApp } from "@v3/graphql/public/convert/parseToApp";
import { GetAppDocument } from "@v3/graphql/public/type";

export const RecordListPage = async ({ appId }: { appId: string }) => {
  const { data } = await fetchQuery(GetAppDocument, { appId });
  const app = parseToApp(data);
  const columnsTemplate = makeColumnsTemplate(app.fields);
  const headerItems = makeHeaderItems(app.fields);

  const linkDataBaseResult = linkDatabaseSchema.safeParse(
    data?.app?.linkDatabase,
  );

  return (
    <PageClientFrame
      title={
        <Title title={app.name}>
          <RedirectSettingButton appId={app.id} />
          <AddRecordButton columnTemplate={columnsTemplate} />
          <RedirectImportButton appId={app.id} />
          <RedirectChartButton appId={app.id} />
        </Title>
      }
    >
      <Suspense fallback={<TableLoading />}>
        {linkDataBaseResult.success ? (
          <RecordListTableByLinkDatabaseServer
            app={app}
            headerItems={headerItems}
            linkDatabase={linkDataBaseResult.data}
          />
        ) : (
          <RecordListTableByRecordsServer
            app={app}
            headerItems={headerItems}
            recordsData={data?.app?.records}
          />
        )}
      </Suspense>
    </PageClientFrame>
  );
};
