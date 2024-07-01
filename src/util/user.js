export async function getUserPhotoFilePath(id, callback) {
  const file_id = await fetch(
    "https://api.telegram.org/bot6498389353:AAErk3KqUxzPJPxwUBrv73b6MoDwbK0CEtQ/getUserProfilePhotos",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: id, limit: "1" }),
    }
  )
    .then((response) => response.json())
    .then((response) => {
      return response.result.photos[0][0].file_id;
    });

  const file_path = await fetch(
    "https://api.telegram.org/bot6498389353:AAErk3KqUxzPJPxwUBrv73b6MoDwbK0CEtQ/getFile",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ file_id: file_id }),
    }
  )
    .then((response) => response.json())
    .then((response) => {
      return response.result.file_path;
    });

  callback(
    `https://api.telegram.org/file/bot6498389353:AAErk3KqUxzPJPxwUBrv73b6MoDwbK0CEtQ/${file_path}`
  );
}
