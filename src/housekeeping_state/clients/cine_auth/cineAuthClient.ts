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

const preparePost = async <T>(rawBody: any, endpoint: string): Promise<EitherType<string, T>> => {
        var body = JSON.stringify(rawBody);

        const options: RequestInit = {
            method: "POST",
            mode: "cors",
            headers,
            body
        };
        try {
            const response = await fetch(API_URL + endpoint, options);
            if (response.ok) {
                return Either.Right(await response.json() as T);
            } else {
                const cineError = (await response.json()).error as CineError;
                return Either.Left(cineError.errorMessage);
            }
        }
        catch (err) {
            return Either.Left("Something went wrong");
        }
}

export const postLogin = (username: string, password: string): Promise<EitherType<string, string>> => {
    return preparePost({ username, password }, "/login");
};