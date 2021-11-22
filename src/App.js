import React from "react";
import { Route, Routes } from "react-router-dom"

//componets
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
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
      <main>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/prices" element={<PricesPage />} />
        </Routes>
      </main>
      <Footer />
    </>)
}
export default App;
