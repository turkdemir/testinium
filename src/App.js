import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Candidates from "./components/Candidates";
import Details from "./components/Details";
import Page404 from "./components/Page404";
import { getCandidates } from "./actions/candidates.action";

function App() {
  const history = createBrowserHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCandidates());
  }, []);
  console.log(process.env.REACT_APP_DEV_MODE);

  console.log(process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE)

  return (
    <div className="container">
      <BrowserRouter history={history}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/candidates/:id" element={<Details />} />
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
