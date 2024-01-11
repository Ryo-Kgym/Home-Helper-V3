/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { ConfirmPromptPresenter } from "./ConfirmPromptPresenter";

export const ConfirmPromptContainer = ({
  title,
  children,
  opened,
  onClose,
  doneOnClickHandler,
}: {
  title: string;
  children: React.ReactNode;
  opened: boolean;
  onClose: () => void;
  doneOnClickHandler: () => void;
}) => (
  <ConfirmPromptPresenter
    title={title}
    opened={opened}
    onClose={onClose}
    doneOnClickHandler={doneOnClickHandler}
  >
    {children}
  </ConfirmPromptPresenter>
);
