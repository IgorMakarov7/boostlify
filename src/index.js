import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

window.Telegram = {
  WebView: {
    initParams: {
      tgWebAppData:
        "query_id=AAGvyBFEAAAAAK_IEURuSvYa&user=%7B%22id%22%3A1142016175%2C%22first_name%22%3A%22Igor%22%2C%22last_name%22%3A%22Makarov%22%2C%22username%22%3A%22IgorMakarov7%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1720327344&hash=d9553b95cb4f597c2625fbf046d52e889a8f65f7346884388be3432d0e16da5f",
      tgWebAppVersion: "7.4",
      tgWebAppPlatform: "tdesktop",
      tgWebAppThemeParams:
        '{"accent_text_color":"#6ab2f2","bg_color":"#17212b","button_color":"#5288c1","button_text_color":"#ffffff","destructive_text_color":"#ec3942","header_bg_color":"#17212b","hint_color":"#708499","link_color":"#6ab3f3","secondary_bg_color":"#232e3c","section_bg_color":"#17212b","section_header_text_color":"#6ab3f3","subtitle_text_color":"#708499","text_color":"#f5f5f5"}',
    },
    isIframe: false,
  },
  Utils: {},
  WebApp: {
    initData:
      "query_id=AAGvyBFEAAAAAK_IEURuSvYa&user=%7B%22id%22%3A1142016175%2C%22first_name%22%3A%22Igor%22%2C%22last_name%22%3A%22Makarov%22%2C%22username%22%3A%22IgorMakarov7%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1720327344&hash=d9553b95cb4f597c2625fbf046d52e889a8f65f7346884388be3432d0e16da5f",
    initDataUnsafe: {
      query_id: "AAGvyBFEAAAAAK_IEURuSvYa",
      user: {
        id: 1142016175,
        first_name: "Igor",
        last_name: "Makarov",
        username: "IgorMakarov7",
        language_code: "ru",
        allows_write_to_pm: true,
      },
      auth_date: "1720327344",
      hash: "d9553b95cb4f597c2625fbf046d52e889a8f65f7346884388be3432d0e16da5f",
    },
    version: "7.4",
    platform: "tdesktop",
    colorScheme: "dark",
    themeParams: {
      accent_text_color: "#6ab2f2",
      bg_color: "#17212b",
      button_color: "#5288c1",
      button_text_color: "#ffffff",
      destructive_text_color: "#ec3942",
      header_bg_color: "#17212b",
      hint_color: "#708499",
      link_color: "#6ab3f3",
      secondary_bg_color: "#232e3c",
      section_bg_color: "#17212b",
      section_header_text_color: "#6ab3f3",
      subtitle_text_color: "#708499",
      text_color: "#f5f5f5",
    },
    isExpanded: true,
    viewportHeight: 591,
    viewportStableHeight: 591,
    isClosingConfirmationEnabled: false,
    isVerticalSwipesEnabled: true,
    headerColor: "#17212b",
    backgroundColor: "#17212b",
    BackButton: { isVisible: false },
    MainButton: {
      text: "CONTINUE",
      color: "#5288c1",
      textColor: "#ffffff",
      isVisible: false,
      isProgressVisible: false,
      isActive: true,
    },
    SettingsButton: { isVisible: false },
    HapticFeedback: {},
    CloudStorage: {},
    BiometricManager: {
      isInited: false,
      isBiometricAvailable: false,
      biometricType: "unknown",
      isAccessRequested: false,
      isAccessGranted: false,
      isBiometricTokenSaved: false,
      deviceId: "",
    },
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>{validateInitDataUnsafe()}</React.StrictMode>
);

function validateInitDataUnsafe() {
  if (!window.Telegram.WebApp.initDataUnsafe.hasOwnProperty("user")) {
    return <div>только в telegram</div>;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
  ]);
  return <RouterProvider router={router} />;
}
