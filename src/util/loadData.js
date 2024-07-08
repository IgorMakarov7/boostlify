export async function loadUserPhoto(setUserPhoto, setIsLoading) {
  const userPhotoBase64 = await fetchUserPhoto(
    window.Telegram.WebApp.initDataUnsafe.user.id
  );
  await setUserPhoto(userPhotoBase64);
  setIsLoading(false);
}

async function fetchUserPhoto(userId) {
  return await fetch(
    "https://boostlify-backend.onrender.com/api/telegram/userPhoto",
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: userId }),
    }
  ).then((response) => response.text());
}
