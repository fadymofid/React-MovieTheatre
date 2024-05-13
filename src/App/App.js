import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MovieProvider } from "../contexts/MovieContext"; 
import NavBar from "../Pages/NavBar";
import A from './App.css'
const Home = lazy(() => import("../Pages/Home"));
const About = lazy(() => import("../Pages/About"));
const Details = lazy(() => import("../Pages/Details"));
const NotFound = lazy(() => import("../Pages/NotFound"));

function App() {
  return (
  
    <Suspense fallback={<div>Loading</div>}>
      
        <Router>
       <MovieProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
          </MovieProvider>
        </Router>
   
    </Suspense>
  );
}

export default App;






