import { useNavigate } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { getAvatarPath } from "./util/Avatar";

function App() {
  const [avatarPath, setAvatarPath] = useState("");
  const user = window.Telegram.WebApp.initDataUnsafe.user;
  getAvatarPath(setAvatarPath, user.id);
  const navigate = useNavigate();

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
          <span className="menu-icon material-symbols-outlined">
            trending_up
          </span>
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
          <span className="menu-icon material-symbols-outlined">group</span>
          <button className="menu-btn">дуо буст</button>
        </div>
        <div className="wrapper-menu-btn">
          <span className="menu-icon material-symbols-outlined">
            restart_alt
          </span>
          <button className="menu-btn">калибровка</button>
        </div>
        <div className="wrapper-menu-btn">
          <span className="menu-icon material-symbols-outlined">check</span>
          <button className="menu-btn">отмыв лп</button>
        </div>
        <div className="wrapper-menu-btn">
          <span className="menu-icon material-symbols-outlined">
            account_balance_wallet
          </span>
          <button className="menu-btn">аккаунты</button>
        </div>
      </div>
    </div>
  );
}

export default App;
