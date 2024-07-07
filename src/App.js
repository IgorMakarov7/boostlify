import { useState } from "react";
import { FallingLines } from "react-loader-spinner";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const user = window.Telegram.WebApp.initDataUnsafe.user;

  return (
    <>
      <div
        className="loader-wrapper"
        style={{ display: isLoading ? "block" : "none" }}
      >
        <FallingLines
          color="#4fa94d"
          width="100"
          visible={true}
          ariaLabel="falling-circles-loading"
        />
      </div>
      <div style={{ display: isLoading ? "none" : "block" }} className="App">
        <div className="header">
          <div className="wrapper-photo">
            <img
              className="photo"
              src={getUserPhoto(user.id)}
              alt="profile"
              onLoad={() => setIsLoading(false)}
            />
          </div>
          <div className="wrapper-username">
            <h1 className="username">{user.first_name}</h1>
            <p className="username-hint">ваше имя и фото из telegram</p>
          </div>
        </div>
      </div>
    </>
  );
}

async function getUserPhoto(userId) {
  return await fetch("https://boostlify-backend.onrender.com/api/telegram/userPhoto", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: userId }),
  }).then((response) => {
    return response;
  });
}
export default App;
