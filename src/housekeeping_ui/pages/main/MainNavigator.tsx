export default function MainNavigator() {
  return (
    <>
      <div className="home-page__navigator">
        <div className="navigator__block">
          <div className="navigator__header">Main</div>
          <ul className="navigator__list">
            <li className="navigator__list-item">
              <a href="/status">View status</a>
            </li>
            <li className="navigator__list-item navigator__list-item--selected">
              <a href="/request-movie">Request movie</a>
            </li>
            <li className="navigator__list-item">
              <a href="/status">View status</a>
            </li>
            <li className="navigator__list-item">
              <a href="/request-movie">Request movie</a>
            </li>
            <li className="navigator__list-item">
              <a href="/status">View status</a>
            </li>
            <li className="navigator__list-item">
              <a href="/request-movie">Request movie</a>
            </li>
          </ul>
        </div>
        <div className="navigator__block">
          <div className="navigator__header">Other</div>
          <ul className="navigator__list">
            <li className="navigator__list-item">
              <a href="/status">View status</a>
            </li>
            <li className="navigator__list-item">
              <a href="/request-movie">Request movie</a>
            </li>
          </ul>
        </div>
        <div className="navigator__block">
          <div className="navigator__header">Something</div>
          <ul className="navigator__list">
            <li className="navigator__list-item">
              <a href="/status">View status</a>
            </li>
            <li className="navigator__list-item">
              <a href="/request-movie">Request movie</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
