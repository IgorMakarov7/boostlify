import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

window.Telegram.WebApp.initDataUnsafe.user = {
  id: 1142016175,
  first_name: "Igor",
  last_name: "Makarov",
  username: "IgorMakarov7",
  language_code: "ru",
  allows_write_to_pm: true,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>{validateInitDataUnsafe()}</React.StrictMode>
);

function validateInitDataUnsafe() {
  if (window.Telegram.WebApp.initDataUnsafe.hasOwnProperty("user")) {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
      },
    ]);
    return <RouterProvider router={router} />;
  } else {
    return <div>только в telegram</div>;
  }
}
