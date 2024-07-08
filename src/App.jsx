import Loader from "./components/Loader";
import "./App.css";
import { validateInitData } from "./util/validateData";
import { useEffect, useState } from "react";
import { loadUserPhoto } from "./util/loadData";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [initDataStatus, setInitDataStatus] = useState("process");
  const [userPhoto, setUserPhoto] = useState();

  useEffect(() => {
    validateInitData(setInitDataStatus);
  }, []);

  useEffect(() => {
    if (initDataStatus === "invalid") {
      setIsLoading(false);
    }
    if (initDataStatus === "valid") {
      loadUserPhoto(setUserPhoto, setIsLoading);
    }
  }, [initDataStatus]);

  if (isLoading) {
    return <Loader />;
  }
  if (initDataStatus === "invalid") {
    return <div>ваши данные не прошли проверку</div>;
  }

  const first_name = window.Telegram.WebApp.initDataUnsafe.user.first_name;
  return (
    <div className="App">
      <div className="header">
        <div className="wrapper-photo">
          <img className="photo" src={userPhoto} alt="profile" />
        </div>
        <div className="wrapper-username">
          <h1 className="username">{first_name}</h1>
          <p className="username-hint">ваше имя и фото из telegram</p>
        </div>
      </div>
    </div>
  );
};

export default App;
