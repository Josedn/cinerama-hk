import { useEffect } from "react";
import RequireNotLoginRedirector from "../../containers/RequireNotLoginRedirector";
import "./GenericPage.scss";
import MainNavigator from "./MainNavigator";
import MainHeader from "./MainHeader";
import HomeContent from "./contents/HomeContent";

export default function GenericPage(props: { title: string }) {
  useEffect(() => {
    document.title = "Cinerama HK - " + props.title;
  });

  return (
    <>
      <RequireNotLoginRedirector />
      <div className="home-page">
        <MainHeader />
        <div className="home-page__separator" />
        <div className="home-page__wrapper">
          <MainNavigator />
          <HomeContent />
        </div>
        <div className="home-page_footer">Copyright (c) 2022 - filmstock.tv</div>
      </div>
    </>
  );
}
