export const generateAccessToken = () => {
  const tokenLength = 32; // Length of the access token
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let accessToken = "";

  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    accessToken += characters.charAt(randomIndex);
  }

  return accessToken;
};
