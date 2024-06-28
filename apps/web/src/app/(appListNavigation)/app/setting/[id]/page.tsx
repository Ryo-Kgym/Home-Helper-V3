import { FC } from "react";
import { RoutingTabs } from "@components/ui/v4/routingTab";
import { AppDangerous } from "@pageComponents/appDangerous";
import { ModifyApp } from "@pageComponents/appModify";
import { LinkDatabase } from "pageComponents/appLinkDatabase";

const tabGroup: Record<
  string,
  {
    label: string;
    Component: FC<{ appId: string }>;
  }
> = {
  fields: {
    label: "フィールドの変更",
    Component: ModifyApp,
  },
  dangerous: {
    label: "危険エリア",
    Component: AppDangerous,
  },
  linkDatabase: {
    label: "外部DB連携",
    Component: LinkDatabase,
  },
};

const Page = ({
  params: { id },
  searchParams,
}: {
  params: { id: string };
  searchParams: { tab: string | undefined };
}) => {
  const { Component } = tabGroup[searchParams.tab ?? "fields"] ?? {
    Component: NotFound,
    label: "404",
  };

  return (
    <>
      <RoutingTabs
        tabs={Object.fromEntries(
          Object.entries(tabGroup).map(([k, v]) => [k, { label: v.label }]),
        )}
        currentTab={searchParams.tab ?? "fields"}
      />
      <Component appId={id} />
    </>
  );
};
export default Page;

const NotFound = (_: { appId: string }) => <div>404</div>;
