import "@testing-library/jest-dom/vitest";
import "@testing-library/jest-dom";

import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

afterEach(() => {
  cleanup();
});
