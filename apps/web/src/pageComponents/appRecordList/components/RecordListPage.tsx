import { Suspense } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { TableLoading } from "@components/ui/v4/loading/TableLoading";
import { PageClientFrame } from "@components/ui/v4/PageClientFrame";
import { AddRecordButton } from "@feature/app/nav/AddRecordButton";
import { RedirectChartButton } from "@feature/app/nav/RedirectChartButton";
import { RedirectImportButton } from "@feature/app/nav/RedirectImportButton";
import { RedirectSettingButton } from "@feature/app/nav/RedirectSettingButton";
import { RecordListTableServer } from "@features/appRecordList/components/table/RecordListTableServer";
import { makeColumnsTemplate } from "@features/appRecordList/server/makeColumnsTemplate";
import { makeHeaderItems } from "@features/appRecordList/server/makeHeaderItems";
import { switchRecords } from "@features/appRecordList/server/switchRecords";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { parseToApp } from "@v3/graphql/public/convert/parseToApp";
import { GetAppDocument } from "@v3/graphql/public/type";

export const RecordListPage = async ({ appId }: { appId: string }) => {
  const { data } = await fetchQuery(GetAppDocument, { appId });
  const app = parseToApp(data);
  const columnsTemplate = makeColumnsTemplate(app.fields);
  const headerItems = makeHeaderItems(app.fields);

  const switchedRecords = await switchRecords(app, {
    linkDatabase: data?.app?.linkDatabase,
    records: data?.app?.records ?? [],
  });

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
        <RecordListTableServer
          app={app}
          headerItems={headerItems}
          switchedRecords={switchedRecords}
        />
      </Suspense>
    </PageClientFrame>
  );
};
