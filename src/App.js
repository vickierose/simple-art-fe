import React from "react";
import { Route, Routes } from "react-router-dom"

//componets
import Header from "./Header/Header";
import {
  HomePage,
  CoursesPage,
  AboutPage,
  TeachersPage,
  PricesPage
} from "./pages"

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/prices" element={<PricesPage />} />
      </Routes>
      //footer link
    </>)

}

export default App;
