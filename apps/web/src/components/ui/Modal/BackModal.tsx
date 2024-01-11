/*
 * Copyright (c) 2024 Ryo-Kgym.
 */
"use client";

import { Modal } from "@components/atoms/Modal";
import { useRouter } from "next/navigation";

export const BackModal = ({ children }: { children: React.ReactNode }) => {
  const { back } = useRouter();

  return (
    <Modal opened={true} onClose={back}>
      {children}
    </Modal>
  );
};
