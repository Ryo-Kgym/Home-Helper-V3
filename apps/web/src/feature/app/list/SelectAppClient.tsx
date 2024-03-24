/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Modal } from "@components/ui/v4/modal";
import { paths } from "@routing/paths";

import { useGetAppList } from "./useGetAppList";

export const SelectAppClient = () => {
  const { appList } = useGetAppList();

  const { push } = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div>
        <div className={"grid grid-cols-3"}>
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
