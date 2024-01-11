/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

// tailwind config is required for editor support

import type { Config } from "tailwindcss";
// @ts-ignore
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/app/**/*.tsx", "./src/components/**/*.{js,ts,jsx,tsx}"],
  presets: [sharedConfig],
};

export default config;
