import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import page1 from "./components/Page1.js";
import page2 from "./components/Page2.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Page3 from "./components/page2.js";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}
export default App;
{
  /* <Route path="/page3" component={Page3} /> */
}
