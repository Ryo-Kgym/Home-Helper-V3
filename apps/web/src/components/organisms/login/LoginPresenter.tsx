/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { LoginButton } from "~/components/molecules/AuthButton";

export const LoginPresenter = ({
  message,
}: {
  message: string | undefined;
}) => (
  <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <Title />
    <ButtonArea>
      <LoginButton />
    </ButtonArea>
    {message && <p className={"p-4 text-red-500"}>{message}</p>}
  </div>
);

const Title = () => (
  <h1 className="font-serif text-6xl font-bold text-yellow-400">One for All</h1>
);

const ButtonArea = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => (
  <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
    {children}
  </div>
);
