import dotenv from "dotenv";
dotenv.config();
export const fbconfig = {
  facebook_api_key: "584015507135943",
  facebook_api_secret: "ab3841298ab96cf8118d4fe43e86c840",
  callback_url: "http://localhost:3000/fbauth/facebook/callback",
  profileFields: ["emails", "name"],
  use_database: true,
  host: "localhost",
  username: "root",
  database: "facebook",
};
