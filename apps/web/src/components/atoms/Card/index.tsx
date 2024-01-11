/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import Link from "next/link";

export type LinkProps = {
  href: string;
  label: string;
  back?: boolean;
  handleClick?: () => void;
};

export const LinkList = ({ props }: { props: LinkProps[] }) => (
  <div className={"space-y-5"}>
    {props.map((p, i) => (
      <Card
        href={p.href}
        label={p.label}
        back={p.back}
        handleClick={p.handleClick}
        key={"link" + i}
      />
    ))}
  </div>
);

// TODO description を追加する
const Card = ({ back, label, href, handleClick }: LinkProps) => {
  const text = back ? <h2>&larr; {label}</h2> : <h2> {label} </h2>;

  return (
    <div
      className={
        "border-2 rounded-2xl border-gray-300 hover:border-blue-500 shadow"
      }
    >
      <Link href={href} onClick={handleClick}>
        <div className={"text-2xl p-[2em]"}>{text}</div>
      </Link>
    </div>
  );
};
