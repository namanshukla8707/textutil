import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  // const [color, setcolor] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      // setcolor("light");
      document.body.style.backgroundColor = "grey";
      document.title = "TextUtils - Dark Mode";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      // setcolor("dark");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode";
      showAlert("Light mode has been enabled", "success");
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
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
