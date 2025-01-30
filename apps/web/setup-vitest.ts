import "@testing-library/jest-dom/vitest";
import "@testing-library/jest-dom";

import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach, vi } from "vitest";

beforeEach(() => {
  console.error = vi.fn();
  vi.clearAllMocks();
});

afterEach(() => {
  cleanup();
});

vi.mock("@/core/function/date/convertToYmd");
