import "./CineUI.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import GenericPage from "./pages/main/GenericPage";

export default function CineUI() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<GenericPage title="Home" />} />
      </Routes>
    </BrowserRouter>
  );
}
