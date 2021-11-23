import React from "react";
import { Route, Routes } from "react-router-dom"
import Header from "./Header/Header";
import Footer from "./components/Footer/Footer";
import './App.scss';
import {
  HomePage,
  CoursesPage,
  About,
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
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/prices" element={<PricesPage />} />
        </Routes>
      </main>
      <Footer />
    </>)
}
export default App;
