import { useNavigate } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { getAvatarPath } from "./util/Avatar";
import { FallingLines } from "react-loader-spinner";
import Trending from "./resources/trending_up.svg";
import Group from "./resources/group.svg";
import RestartAlt from "./resources/restart_alt.svg";
import DoneAll from "./resources/done_all.svg";
import Wallet from "./resources/wallet.svg";

function App() {
  const [avatarPath, setAvatarPath] = useState("");
  const user = window.Telegram.WebApp.initDataUnsafe.user;
  getAvatarPath(setAvatarPath, user.id);
  const navigate = useNavigate();

  if (avatarPath === "") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "var(--tg-viewport-stable-height)",
        }}
      >
        <FallingLines
          color="#4fa94d"
          width="100"
          visible={true}
          ariaLabel="falling-circles-loading"
        />
      </div>
    );
  }
  return (
    <div className="App">
      <div className="header">
        <img
          className="avatar"
          width={92}
          height={92}
          src={avatarPath}
          alt="avatar"
        />
        <div className="wrapper-username">
          <span className="username">{user.username}</span>
          <span className="username-hint">
            Это ваш username telegram<br></br>является идентификатором внутри
            сервиса
          </span>
        </div>
        <hr className="header-bottom" />
      </div>
      <div className="menu">
        <div className="wrapper-menu-btn">
          <object className="menu-icon" type="image/svg+xml" data={Trending}>
            trending
          </object>
          <button
            onClick={() => {
              navigate("/mmr");
            }}
            className="menu-btn"
          >
            буст ммр
          </button>
        </div>
        <div className="wrapper-menu-btn">
          <object className="menu-icon" type="image/svg+xml" data={Group}>
            group
          </object>
          <button className="menu-btn">дуо буст</button>
        </div>
        <div className="wrapper-menu-btn">
          <object className="menu-icon" type="image/svg+xml" data={RestartAlt}>
            restart
          </object>
          <button className="menu-btn">калибровка</button>
        </div>
        <div className="wrapper-menu-btn">
          <object className="menu-icon" type="image/svg+xml" data={DoneAll}>
            done
          </object>
          <button className="menu-btn">отмыв лп</button>
        </div>
        <div className="wrapper-menu-btn">
          <object className="menu-icon" type="image/svg+xml" data={Wallet}>
            wallet
          </object>
          <button className="menu-btn">аккаунты</button>
        </div>
      </div>
    </div>
  );
}

export default App;
