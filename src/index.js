import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

root.render(<RouterProvider router={router} />);

//
//
//
//
// if (!window.Telegram.WebApp.initDataUnsafe.hasOwnProperty("user")) {
//   root.render(<div>доступно только в telegram</div>);
// } else if (!isInitDataValid) {
//   root.render(<div>ваши данные не прошли проверку</div>);
// } else {
//   root.render();
// }

// async function isInitDataValid() {
//   return await fetch("http://localhost:3030/api/telegram/validate", {
//     method: "POST",
//     headers: {
//       accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ initData: window.Telegram.WebApp.initData }),
//   }).then((response) => {
//     return response.status === 200;
//   });
// }
