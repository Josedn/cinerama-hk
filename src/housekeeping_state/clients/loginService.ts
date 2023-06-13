import { postLogin } from "./cine_auth/cineAuthClient";

export async function fetchLogin(username: string, password: string): Promise<LoginResult> {

    const loginTokenE = await postLogin(username, password);
    return loginTokenE.fold(errorMessage => ({ data: "", error: errorMessage}), loginToken => ({ data: loginToken, error: "" }));
}

export interface LoginResult {
    data: string;
    error: string;
}