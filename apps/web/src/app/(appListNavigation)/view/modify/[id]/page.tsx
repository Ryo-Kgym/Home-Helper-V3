import { FC } from "react";
import { RoutingTabs } from "@components/ui/v4/routingTab";
import { ModifyView } from "@features/viewAppModify";
import { ViewDangerous } from "@pageComponents/viewDangerous";

const tabGroup: Record<
  string,
  {
    label: string;
    Component: FC<{ viewId: string }>;
  }
> = {
  viewApp: {
    label: "構成するアプリの変更",
    Component: ModifyView,
  },
  fields: {
    label: "フィールドの変更",
    Component: () => <div>Fieldsの編集</div>,
  },
  dangerous: {
    label: "危険エリア",
    Component: ViewDangerous,
  },
};

const Page = ({
  params: { id },
  searchParams,
}: {
  params: { id: string };
  searchParams: { tab: string | undefined };
}) => {
  const { Component } = tabGroup[searchParams.tab ?? "viewApp"] ?? {
    Component: NotFound,
    label: "404",
  };

  return (
    <>
      <RoutingTabs
        tabs={Object.fromEntries(
          Object.entries(tabGroup).map(([k, v]) => [k, { label: v.label }]),
        )}
        currentTab={searchParams.tab ?? "viewApp"}
      />
      <Component viewId={id} />
    </>
  );
};

export default Page;

const NotFound = (_: { viewId: string }) => <div>404</div>;
