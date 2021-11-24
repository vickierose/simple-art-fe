import React from "react";
import { Route, Routes } from "react-router-dom"

import './App.scss'

//componets
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {
  HomePage,
  CoursesPage,
  AboutPage,
  TeachersPage,
  PricesPage,
  ApplyPage
} from "./pages"

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/apply" element={<ApplyPage />} />
        </Routes>
      </main>
      <Footer />
    </>)
}
export default App;
