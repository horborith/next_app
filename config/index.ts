import Spotify from "spotify-web-api-js";
export const CLIENT_ID = "<CLIENT_ID>";
export const REDIRECT_URL = "<REDIRECT_URL>";

export const TOKEN_NAME = "spotify_access_token";
export const EXPIRATION_TIME = "spotify_expires_in";
export const USER_ID = "spotify_user_id";

export const SPOTIFY_API = new Spotify();
