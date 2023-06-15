import ConfigManager from "../../utils/ConfigManager";
import { ConfigKeys } from "../../utils/ConfigKeys";
import { Either as EitherType } from "jazzi/dist/Either/types";
import { Either } from "jazzi";
import { CineError } from "cinerama-common/lib/protocol";

const API_URL = ConfigManager.getString(ConfigKeys.REACT_APP_CINE_AUTH_API_URL);

const headers = (() => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  return headers;
})();

const prepareRequest = async <T>(
  method: string,
  endpoint: string,
  rawBody?: any,
): Promise<EitherType<CineError, T>> => {
  const body = rawBody ? JSON.stringify(rawBody) : undefined;

  const options: RequestInit = {
    method,
    mode: "cors",
    headers,
    body,
  };
  try {
    const response = await fetch(API_URL + endpoint, options);
    if (response.ok) {
      return Either.Right((await response.json()) as T);
    } else {
      const cineError = (await response.json()).error as CineError;
      return Either.Left(cineError);
    }
  } catch (err) {
    return Either.Left(CineError.INTERNAL_ERROR);
  }
};

export interface UserData {
  username: string;
  lastLogin: Date;
}

export const postLogin = (username: string, password: string): Promise<EitherType<CineError, string>> => {
  return prepareRequest("POST", "/login", { username, password });
};

export const getUser = (sessionToken: string): Promise<EitherType<CineError, UserData>> => {
  return prepareRequest("GET", "/user/" + sessionToken);
};
