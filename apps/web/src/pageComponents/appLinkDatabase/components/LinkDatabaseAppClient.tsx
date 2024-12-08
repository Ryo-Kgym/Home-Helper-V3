"use client";

import { Fields } from "@oneforall/domain/schema/appSchema";
import { LinkDatabase } from "@oneforall/domain/schema/linkDatabase/linkDatabaseSchema";

import { Title } from "~/components/ui/v4/frame/Title";
import { PageClientFrame } from "~/components/ui/v4/PageClientFrame";
import { RedirectListButton } from "../../../feature/app/nav/RedirectListButton";
import { EditLinkDatabase } from "../../../features/appEditLinkDatabase/components/EditLinkDatabase";

export const LinkDatabaseAppClient = ({
  appId,
  defaultLinkDatabase,
  fields,
}: {
  appId: string;
  defaultLinkDatabase: LinkDatabase;
  fields: Fields;
}) => {
  return (
    <PageClientFrame
      title={
        <Title title={"外部DB連携"}>
          <RedirectListButton appId={appId} />
        </Title>
      }
    >
      <EditLinkDatabase
        appId={appId}
        defaultLinkDatabase={defaultLinkDatabase}
        fields={fields}
      />
    </PageClientFrame>
  );
};
