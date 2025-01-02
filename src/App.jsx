import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import urls from "./utils/paths";
import { adminUrls } from "./utils/paths";
import {
  Home,
  UserMaster,
  BrowseBook,
  Cart,
  OrderHistory,
  Login,
  Register,
} from "./pages";
import { Master, ManageBook } from "./pages/admin";
function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path={urls.LOGIN} element={<Login />}></Route>
          <Route path={urls.REGISTER} element={<Register />}></Route>
          <Route path={"/admin"} element={<Master />}>
            <Route path={adminUrls.MANAGEBOOK} element={<ManageBook />}></Route>
          </Route>
          <Route path={"/"} element={<UserMaster />}>
            <Route path="" element={<Home />}></Route>
            <Route path={urls.CART} element={<Cart />}></Route>
            <Route path={urls.BROWSEBOOK} element={<BrowseBook />}></Route>
            <Route path={urls.ORDERHISTORY} element={<OrderHistory />}></Route>
          </Route>
          <Route path="/*" element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
