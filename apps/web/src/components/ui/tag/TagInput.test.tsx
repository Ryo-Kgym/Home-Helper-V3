import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import { TagInput } from "./TagInput";

describe("TagInput", () => {
  test("ホバーすると、セレクトボックスが表示される。さらに、アンホバーすると、セレクトボックスが非表示になる。", async () => {
    render(<TagInput data={data} />);

    expect(document.querySelector("ul")).not.toBeInTheDocument();
    await userEvent.hover(screen.getByRole("button"));
    expect(document.querySelector("ul")).toBeInTheDocument();
    await userEvent.unhover(screen.getByRole("button"));
    expect(document.querySelector("ul")).not.toBeInTheDocument();
  });

  test("選択したものが入力欄に表示される。さらに、選択中のものをクリックすると、入力欄から取り除かれる", async () => {
    render(<TagInput data={data} />);

    await userEvent.hover(screen.getByRole("button"));
    expect(document.querySelector("ul")).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText("タグ2"));
    await userEvent.click(screen.getByLabelText("タグ3"));

    const expected1 = ["タグ2", "タグ3"];
    screen.getAllByTestId("tagInput-selected-value").forEach((element) => {
      expect(element).toHaveTextContent(expected1.shift()!);
    });
    await userEvent.click(screen.getByLabelText("タグ3"));
    const expected2 = ["タグ2"];
    screen.getAllByTestId("tagInput-selected-value").forEach((element) => {
      expect(element).toHaveTextContent(expected2.shift()!);
    });
  });
});

const data = [
  {
    label: "タグ1",
    value: "tag1",
  },
  {
    label: "タグ2",
    value: "tag2",
  },
  {
    label: "タグ3",
    value: "tag3",
  },
];
