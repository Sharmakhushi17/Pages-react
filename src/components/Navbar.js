import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/page1" target="_blank">
              Page1
            </Link>
          </li>
          <li>
            <Link to="/page2">Page2</Link>
          </li>
          <li>
            <Link to="/page3">Page3</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/page1" exact element={<Page1 />} />
        <Route path="/page2" exact element={<Page2 />} />
      </Routes>
    </div>
  );
}
