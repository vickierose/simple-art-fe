import React from "react";
import { Route, Routes } from "react-router-dom"

import './App.scss'

//componets
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"

import {
  HomePage,
  CoursesPage,
  About,
  TeachersPage,
  ApplyPage,
  SingleCourse
} from "./pages"

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/apply" element={<ApplyPage />} />

          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<SingleCourse />} />
          
        </Routes>
      </main>
      <Footer />
    </>)
}
export default App;
