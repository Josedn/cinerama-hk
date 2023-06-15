import { SyntheticEvent } from "react";
import { useAppDispatch } from "../../../housekeeping_state/hooks";
import { logOut } from "../../../housekeeping_state/reducers/loginSlice";

export default function MainHeader() {
  const dispatch = useAppDispatch();

  const onLogOut = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(logOut());
  };

  return (
    <>
      <div className="home-page__header">
        <div className="home-page__header-column home-page__header-column--left">
          <h2 className="header__title">Cinerama Housekeeping</h2>
          <div className="header__text">
            Logged as: <strong>rlvnc</strong>
            <br />
            Previous login at 19-09-2022 11:40pm from 127.0.0.1
          </div>
        </div>

        <div className="home-page__header-column home-page__header-column--center">
          <div className="header__text">
            active movies: <strong>0</strong>
            <br />
            online users: <strong>0</strong>
          </div>
        </div>

        <div className="home-page__header-column home-page__header-column--right">
          <a onClick={onLogOut} href="/">
            Log out
          </a>
        </div>
      </div>
    </>
  );
}
