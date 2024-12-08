"use client";

import { useState } from "react";

import { Title } from "~/components/ui/v4/frame/Title";
import { Modal } from "~/components/ui/v4/modal";
import { PageClientFrame } from "~/components/ui/v4/PageClientFrame";
import { DeleteViewRelationsClient } from "../../../features/viewDelete/components/DeleteViewRelationsClient";
import { ViewDeleteRelations } from "../../../features/viewDelete/types/viewDeleteRelations";
import { Section } from "./Section";

export const ViewDangerousClient = ({
  viewDeleteRelations,
}: {
  viewDeleteRelations: ViewDeleteRelations;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ModalContents, setModalContents] = useState<JSX.Element>(<></>);

  return (
    <>
      <PageClientFrame title={<Title title={"危険エリア"} />}>
        <div className={"space-y-10 px-10"}>
          <Section
            title={"ビューを削除します"}
            description={
              "アプリとのリレーション設定、フィールドの設定、サマリの設定　が削除されます"
            }
            onClick={() => {
              setIsOpen(true);
              setModalContents(
                <DeleteViewRelationsClient
                  viewDeleteRelations={viewDeleteRelations}
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
