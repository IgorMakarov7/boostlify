import { useState } from "react";
import { getUserPhotoFilePath } from "./util/user";
import { FallingLines } from "react-loader-spinner";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userPhoto, setUserPhoto] = useState("");

  const user = window.Telegram.WebApp.initDataUnsafe.user;
  getUserPhotoFilePath(setUserPhoto);

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
              src={userPhoto}
              alt="profile"
              onLoad={() => setIsLoading(false)}
            />
          </div>
          <div className="wrapper-username">
            <h1 className="username">{user.first_name}</h1>
            <p className="username-hint">ваше имя и фото из telegram</p>
          </div>
          <hr className="header-underline" />
        </div>
      </div>
    </>
  );
}
export default App;
