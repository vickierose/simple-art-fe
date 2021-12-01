import React from "react";
import { Provider } from 'react-redux'
import store from './redux/store'
import { Route, Routes } from "react-router-dom"

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
} from "./pages/index"

function App() {
  return (
    <Provider store={store}>
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
    </Provider>)
}
export default App;
