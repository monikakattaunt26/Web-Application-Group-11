import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../home/home/Home";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Shorcuts from "../shortcuts/Shortcuts";


const SetRoutes = () => {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/shortcuts" element={<Shorcuts/>} />
      
      </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
};
export default SetRoutes;
