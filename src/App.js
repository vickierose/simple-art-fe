import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom"

import { useDispatch } from 'react-redux'

import getCoursesAction from './redux/actions/coursesAction'

import './App.scss'

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"

import {
  HomePage,
  CoursesPage,
  TeachersPage,
  ApplyPage,
  SingleCourse,
  AboutPage
} from "./pages"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoursesAction());
  }, [dispatch])

  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/apply" element={<ApplyPage />} />

          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<SingleCourse />} />

        </Routes>
      </main>
      <Footer />
    </>
  )
}
export default App;
