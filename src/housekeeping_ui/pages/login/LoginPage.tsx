import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../housekeeping_state/hooks";
import { loginAsync, selectToken } from "../../../housekeeping_state/reducers/loginSlice";
import "./LoginPage.scss";

export default function LoginPage() {
    const loginToken = useAppSelector(selectToken);
    const dispatch = useAppDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const doLogin = () => {
        dispatch(loginAsync({ username, password }));
    };

    return (
        <div className="login-page">
            <div className="login-page__column login-page__column--left">
                <div className="login-box">
                    <div className="login-box__title">
                        Login {loginToken}
                    </div>
                    <div className="login-box__form">
                        <div className="input-section">
                            Username:
                            <input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="input-section__input"
                                type="text">
                            </input>
                        </div>
                        <div className="input-section">
                            Password:
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input-section__input" 
                                type="password">
                            </input>
                        </div>
                        <div className="input-section input-section--submit">
                            <button
                                onClick={doLogin}
                                className="input-section__button">Login</button>
                        </div>
                    </div>
                </div>
                <div className="login-page__text">
                    Got a problem with the VPN Network? Please report it quickly to the Cinerama team!
                </div>
            </div>
            <div className="login-page__column login-page__column--spacer"></div>

            <div className="login-page__column login-page__column--right information-box">
                <h2 className="information-box__title">
                    Important information!
                </h2>
                <p className="information-box__text">
                    Actions which are performed in Housekeeping are 24 hours and 7 days per week logged.
                    <br /><br />
                    Please make sure you're connected with in the Cinerama VPN Network before you Log In.
                    <br /><br />
                    You are not a moderator or an administrator? Please click <a href="/">here</a> to return to Cinerama!
                </p>
            </div>
        </div>
    );
}