export async function getAvatarPath(setAvatarPath, id) {
  await fetch(
    "https://api.telegram.org/bot6498389353:AAErk3KqUxzPJPxwUBrv73b6MoDwbK0CEtQ/getUserProfilePhotos",
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "User-Agent":
          "Telegram Bot SDK - (https://github.com/irazasyed/telegram-bot-sdk)",
        "content-type": "application/json",
      },
      body: JSON.stringify({ user_id: id, offset: 0, limit: 1 }),
    }
  )
    .then((response) => response.json())
    .then((response) => response.result.photos[0][0].file_id)
    .then((file_id) => getFilePath(file_id, setAvatarPath));
}

async function getFilePath(file_id, setAvatarPath) {
  await fetch(
    "https://api.telegram.org/bot6498389353:AAErk3KqUxzPJPxwUBrv73b6MoDwbK0CEtQ/getFile",
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "User-Agent":
          "Telegram Bot SDK - (https://github.com/irazasyed/telegram-bot-sdk)",
        "content-type": "application/json",
      },
      body: JSON.stringify({ file_id: file_id }),
    }
  )
    .then((response) => response.json())
    .then((response) => response.result.file_path)
    .then((file_path) => {
      setAvatarPath(
        `https://api.telegram.org/file/bot6498389353:AAErk3KqUxzPJPxwUBrv73b6MoDwbK0CEtQ/${file_path}`
      );
    });
}
