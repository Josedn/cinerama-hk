import { UserData, getUser } from "./cine_auth/cineAuthClient";

export async function fetchUser(sessionToken: string): Promise<UserDataResult> {
  const userDataE = await getUser(sessionToken);
  return userDataE.fold(
    cineError => ({ errorCode: cineError.errorCode }),
    userData => ({ data: userData, errorCode: -1 }),
  );
}

export interface UserDataResult {
  data?: UserData;
  errorCode?: number;
}
