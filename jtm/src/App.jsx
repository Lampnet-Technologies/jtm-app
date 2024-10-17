import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ScrollToTop from "./components/ScroolToTop/ScrollToTop";
import ScrollToTopButton from './components/ScroolToTop/ScrollToTopButton';

import FullBlogPost from "./pages/FullBlogPost/FullBlogPost"
import Services from "./pages/Services/Services"
import TheYellowBlogPage from './pages/TheYellowBlogPage/TheYellowBlogPage';



const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const Featured = lazy(() => import("./pages/Featured/Featured"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Error = lazy(() => import("./components/Error/Error"));


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path='/services' element={<Services/>}/>
          <Route path='/full-blog-posts' element={<FullBlogPost/>}/>
          <Route path='/blog-posts' element={<TheYellowBlogPage/>}/>
        </Routes>
        <ScrollToTopButton/>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
