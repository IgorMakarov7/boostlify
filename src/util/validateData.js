export async function validateInitData(setStatus) {
  await fetch("https://boostlify-backend.onrender.com/api/telegram/validate", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ initData: window.Telegram.WebApp.initData }),
  })
    .then((response) => response.text())
    .then((text) => setStatus(text));
}
