/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import baseConfig from "@acme/tailwind-config";

export default {
  content: [
    "./src/app/**/*.tsx",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    ...baseConfig.content,
    "../../packages/ui/**/*.{ts,tsx}",
  ],
  presets: [baseConfig],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
    },
  },
} satisfies Config;
