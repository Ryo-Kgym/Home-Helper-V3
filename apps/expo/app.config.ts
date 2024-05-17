import type { ExpoConfig } from "@expo/config";

const defineConfig = (): ExpoConfig => ({
  name: "Home-Helper",
  slug: "home-helper",
  version: "0.1.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  scheme: "home-helper",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/icon.png",
    resizeMode: "contain",
    backgroundColor: "#1F104A",
  },
  ios: {
    // runtimeVersion: "1.0.0",
    // bundleIdentifier: "your.bundle.identifier",
    supportsTablet: true,
  },
  android: {
    // runtimeVersion: {
    //   policy: "appVersion",
    // },
    // package: "your.bundle.identifier",
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#1F104A",
    },
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/icon.png",
  },
  plugins: [
    "expo-router",
    // "./expo-plugins/with-modify-gradle.js"
  ],
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: "https://u.expo.dev/86b12fab-9446-4883-bde4-cac8a047cdaa",
  },
  assetBundlePatterns: ["**/*"],
  runtimeVersion: "exposdk:49.0.0",
  extra: {
    eas: {
      projectId: "86b12fab-9446-4883-bde4-cac8a047cdaa",
    },
  },
});

export default defineConfig;
