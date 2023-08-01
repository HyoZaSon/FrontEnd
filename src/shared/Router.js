import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import { Detail, Evaluation, Hyozaparent, Hyozason, Login, Main, Register } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hyozason" element={<Hyozason />} />
        <Route path="/hyozason/:helpId" element={<Detail />} />
        <Route path="/hyozaparent" element={<Hyozaparent />} />
        <Route path="hyozaparent/evaluation" element={<Evaluation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;