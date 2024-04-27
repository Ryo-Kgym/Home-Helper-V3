import type { ReactNode } from "react";

export const TailWindCSSTable = ({ children }: { children: ReactNode }) => (
  <table width={"100%"}>{children}</table>
);

const Header = ({ headerItems }: { headerItems: { name: string }[] }) => (
  <thead>
    <tr>
      {headerItems.map(({ name }, index) => (
        <th
          key={`th-td-${index}}`}
          className={"border border-gray-300 p-2 font-bold"}
        >
          {name}
        </th>
      ))}
    </tr>
  </thead>
);

const Body = <T,>({
  data,
  renderItem,
  children,
}: {
  data: T[];
  renderItem: (t: T, index: number) => ReactNode;
  children?: ReactNode;
}) => (
  <tbody>
    {data.map((item, index) => (
      <Tr key={index}>{renderItem(item, index)}</Tr>
    ))}
    {children}
    {data.length === 0 && (
      <tr>
        <td colSpan={100} className={"border border-gray-300 p-2 text-center"}>
          No data
        </td>
      </tr>
    )}
  </tbody>
);

const Tr = ({ children }: { children: ReactNode }) => (
  <tr className={"border border-gray-300"}>{children}</tr>
);

const Td = ({
  children,
  align = "left",
  bgColor = "bg-inherit",
}: {
  children: ReactNode;
  align?: "left" | "center" | "right";
  bgColor?: `bg-${string}`;
}) => (
  <td
    className={`border border-gray-300 p-2 ${bgColor}`}
    style={{ textAlign: align }}
  >
    {children}
  </td>
);

TailWindCSSTable.Header = Header;
TailWindCSSTable.Body = Body;
TailWindCSSTable.BodyTr = Tr;
TailWindCSSTable.BodyTd = Td;
