import type { Config } from "tailwindcss";
// @ts-ignore
import nativewind from "nativewind/preset";

import baseConfig from "@acme/tailwind-config";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [baseConfig, nativewind],
} satisfies Config;
