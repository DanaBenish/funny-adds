import useLocalStorage from "use-local-storage";
import { Toggle } from "./components/Toggle";
import "./index.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from "./pages/Level1";
//import Reports from './pages/Level1';
//import Products from './pages/Lever2';

import "./App.css";

export const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
        <h1 className="title">Hello world!</h1>
        <div className="box">
          <h2>This is a box</h2>
        </div>
      </div>
    </>
  );
};

export default App;
