import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { RickPage } from "./rick-list/app-rick";

export const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RickPage />} />
      </Routes>
    </HashRouter>
  );
};
