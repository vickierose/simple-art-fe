import React from "react";
import { Provider } from 'react-redux'
import store from './redux/store'
import { Route, Routes } from "react-router-dom"
import Header from "./Header/Header";
import Footer from "./Components/Footer/Footer";
import './App.scss';
import {
  HomePage,
  CoursesPage,
  AboutPage,
  TeachersPage,
  PricesPage
} from "./pages"

function App() {
  return (
    <Provider store={store}>
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
    </>
    </Provider>)
}
export default App;
