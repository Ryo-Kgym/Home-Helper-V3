/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { Modal } from "@components/ui/v4/modal";
import { useFindUser } from "@persistence/browser/client/useFindUser";
import { paths } from "@routing/paths";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { AppListType } from "./fetch-app-list";

export const SelectAppClient = ({
  groupId,
  appList,
}: {
  groupId: string;
  appList: AppListType[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { push } = useRouter();
  const { group } = useFindUser();

  useEffect(() => {
    if (!!group.id && group.id !== groupId) {
      window.location.reload();
    }
  }, [group.id, groupId]);

  return (
    <>
      <div>
        <div className={"grid grid-cols-4"}>
          {[
            {
              label: "グループ選択へ",
              back: true,
              onClick: () => push(paths.group.select),
            },
            {
              label: "アプリ新規作成",
              onClick: () => push(paths.app.create),
            },
            {
              label: "ビュー新規作成",
              onClick: () => push(paths.view.create),
            },
            {
              label: "アプリ一覧",
              onClick: () => setIsOpen(true),
            },
          ].map((props) => (
            <LinkBox key={props.label} {...props} />
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Body>
          <div>アプリ一覧</div>
          <div>
            {appList.map((props) => (
              <LinkBox
                key={props.label}
                {...props}
                onClick={() => push(props.href)}
              />
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const LinkBox = ({
  label,
  back,
  onClick,
}: {
  label: string;
  back?: boolean;
  onClick: () => void;
}) => (
  <div>
    <button
      key={label}
      className={
        "w-full border-2 border-gray-300 bg-inherit py-3 hover:bg-blue-100"
      }
      onClick={onClick}
    >
      {back ? "<-" : ""} {label}
    </button>
  </div>
);
