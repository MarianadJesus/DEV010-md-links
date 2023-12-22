import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../movies/pages/home";
import Carrusel from "../movies/components/carrucel";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<h1>Este es el Login</h1>} />
      <Route path="/home" element = {<Home/>} />
      <Route path="/carrucel" element = {<Carrusel/>} />
      <Route path ='/*' element = { <Navigate to ="/home"/>} /> 
    </Routes>
  );
};

export default AppRouter;

