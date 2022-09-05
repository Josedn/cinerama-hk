import "./Home.scss";

export default function HomePage() {
    return (
        <div className="login-box">
            <div className="login-box__title">
                Login
            </div>
            <div className="login-box__form">
                <div className="input-section">
                    Username:
                    <input className="input-section__input" type="text">
                    </input>
                </div>
                <div className="input-section">
                    Password:
                    <input className="input-section__input" type="password">
                    </input>
                </div>
                <div className="input-section input-section--submit">
                    <button className="input-section__button">Login</button>
                </div>
            </div>
        </div>
    );
}