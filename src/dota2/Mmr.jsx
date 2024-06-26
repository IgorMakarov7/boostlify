// import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Mmr() {
  const [current, setCurrent] = useState(0);
  const [end, setEnd] = useState(0);
  const [error, setError] = useState("");

  const updateCurrent = (e) => {
    let value = e.target.value;
    if (value > 9000) {
      setError("Максимальный mmr для буста 9000")
    } else {
      setError("")
      setCurrent(value);
    }
  };
  const updateEnd = (e) => {
    setEnd(e.target.value);
  };

  const tg = window.Telegram.WebApp;
  // const navigate = useNavigate();
  // tg.BackButton.show();
  // tg.BackButton.onClick(() => {
  //   navigate("/");
  // });

  return (
    <div>
      <label htmlFor="current-mmr">Введите текущий MMR</label>
      <input
        onChange={updateCurrent}
        value={current}
        id="current-mmr"
        placeholder="ваш mmr"
        type="number"
      />
      <input
        type="range"
        min={current}
        value={end}
        onChange={updateEnd}
        max="9000"
      />
      <label htmlFor="end-mmr">Введите желаемый MMR</label>
      <input
        value={end}
        onChange={updateEnd}
        id="end-mmr"
        placeholder="итоговый mmr"
        type="number"
      />
      <span>{error}</span>
    </div>
  );
}

export default Mmr;
