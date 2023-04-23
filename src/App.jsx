import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { GlobalStyles } from "./GlobalStyles";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Home/> } />
        </Routes>
      </BrowserRouter>
      <GlobalStyles/>
    </>
  );
}

export default App;
