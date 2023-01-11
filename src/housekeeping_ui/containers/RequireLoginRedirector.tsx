import { useEffect } from "react";
import { useAppSelector } from "../../housekeeping_state/hooks";
import { selectToken, selectLoggedIn } from "../../housekeeping_state/reducers/loginSlice";
import { useNavigate } from "react-router-dom";

export default function RequireLoginRedirector() {
  const loginToken = useAppSelector(selectToken);
  const loggedIn = useAppSelector(selectLoggedIn) && loginToken.length > 0;
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate("/home");
    }
  }, [loggedIn, navigate]);

  return <></>;
}