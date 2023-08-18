import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import { Detail, Evaluation, Hyozaparent, Hyozason, Loading, Login, LoginLoading, Main, Register } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/help/oauth" element={<LoginLoading />} />
        <Route path="/hyozason" element={<Hyozason />} />
        <Route path="/hyozason/:helpId" element={<Detail />} />
        <Route path="/hyozaparent" element={<Hyozaparent />} />
        <Route path="/hyozaparent/loading" element={<Loading />} />
        <Route path="/hyozaparent/evaluation" element={<Evaluation />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;