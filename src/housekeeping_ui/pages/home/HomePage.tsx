import { useEffect } from "react";
import "./HomePage.scss";

export default function HomePage() {
    useEffect(() => {
        document.title = 'Cinerama HK - Home';
    });

    return (
        <div className="home-page">
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
                        cinerama-stream 1.0.0
                        <br />
                        cinerama-api 1.0.0
                        <br />
                        cinerama-subs 1.0.0
                        <br />
                        online users: <strong>0</strong>
                    </div>
                </div>

                <div className="home-page__header-column home-page__header-column--right">
                    <a href="/">Log out</a>
                </div>
            </div>
            <div className="home-page__separator" />
        </div>
    );
}