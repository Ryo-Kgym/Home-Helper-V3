"use client";

import { useState } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { Modal } from "@components/ui/v4/modal";
import { PageClientFrame } from "@components/ui/v4/PageClientFrame";
import { DeleteAppRelationsClient } from "@features/appDelete/components/DeleteAppRelationsClient";
import { AppDeleteRelations } from "@features/appDelete/types/appDeleteRelations";

import { Section } from "./Section";

export const AppDangerousClient = ({
  appDeleteRelations,
}: {
  appDeleteRelations: AppDeleteRelations;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ModalContents, setModalContents] = useState<JSX.Element>(<></>);

  return (
    <>
      <PageClientFrame title={<Title title={"危険エリア"} />}>
        <div className={"space-y-10 px-10"}>
          <Section
            title={"アプリを削除します"}
            description={
              "アプリとのリレーション設定、フィールドの設定、サマリの設定　が削除されます"
            }
            onClick={() => {
              setIsOpen(true);
              setModalContents(
                <DeleteAppRelationsClient
                  appDeleteRelations={appDeleteRelations}
                />,
              );
            }}
          />
          <Section
            title={"これはダミーです"}
            description={
              "ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー"
            }
            onClick={() => undefined}
          />
        </div>
      </PageClientFrame>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setModalContents(<></>);
        }}
      >
        {ModalContents}
      </Modal>
    </>
  );
};
