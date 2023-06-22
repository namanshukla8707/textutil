import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("dark");
  const [color, setcolor] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      setcolor("light");
      document.body.style.backgroundColor = "grey";
      document.title = "TextUtils - Dark Mode";
    } else {
      setmode("light");
      setcolor("dark");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          mode={mode}
          aboutText="About Us"
          toggleMode={toggleMode}
          color={color}
        />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <TextForm heading="Enter the text to analyze" mode={mode} />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
