/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { Modal } from "@components/atoms/Modal";
import { RegisterDailyDetail } from "@components/organisms/register_daily_detail";
import { Transfer } from "@components/organisms/transfer/index";
import { Tab } from "@components/ui";
import { useState } from "react";

export const RegisterDailyButton = ({ date = new Date() }: { date?: Date }) => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div>
      <button
        className={
          "w-13 h-13 cursor-pointer rounded-full border-2 border-green-300 bg-green-300 text-center text-5xl shadow hover:bg-green-400 hover:text-white hover:shadow-md"
        }
        onClick={() => setOpened(true)}
      >
        ＋
      </button>
      <Modal opened={opened} onClose={() => setOpened(false)}>
        <Tab
          defaultSelect="daily"
          tabPropsList={[
            {
              value: "daily",
              label: "日次",
              contents: <RegisterDailyDetail date={date} />,
            },
            {
              value: "transfer",
              label: "振替",
              contents: <Transfer date={date} />,
            },
          ]}
        />
      </Modal>
    </div>
  );
};
