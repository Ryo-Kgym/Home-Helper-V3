import baseConfig from "@acme/tailwind-config";
import nativewind from "nativewind/preset";

import type { Config } from "tailwindcss";
// @ts-expect-error - no types


export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [baseConfig, nativewind],
} satisfies Config;
