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
}: {
  data: T[];
  renderItem: (t: T) => ReactNode;
}) => (
  <tbody>
    {data.map((item, index) => (
      <tr className={"border border-gray-300"} key={index}>
        {renderItem(item)}
      </tr>
    ))}
    {data.length === 0 && (
      <tr>
        <td colSpan={100} className={"border border-gray-300 p-2 text-center"}>
          No data
        </td>
      </tr>
    )}
  </tbody>
);

const Td = ({
  children,
  align = "left",
}: {
  children: ReactNode;
  align?: "left" | "center" | "right";
}) => (
  <td className={"border border-gray-300 p-2"} style={{ textAlign: align }}>
    {children}
  </td>
);

TailWindCSSTable.Header = Header;
TailWindCSSTable.Body = Body;
TailWindCSSTable.BodyTd = Td;
