/*
 * Copyright (c) 2024 Ryo-Kgym.
 */
"use client";

import { useRouter } from "next/navigation";
import { Modal } from "@components/atoms/Modal";

export const BackModal = ({ children }: { children: React.ReactNode }) => {
  const { back } = useRouter();

  return (
    <Modal opened={true} onClose={back}>
      {children}
    </Modal>
  );
};
