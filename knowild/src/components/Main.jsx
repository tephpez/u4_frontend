import React from "react";
import { Route, Routes } from "react-router-dom";

import Basket from "./Basket";
import Home from "./Home";
import Mushrooms from "./Mushrooms";
import Flowers from "./Flowers";
import Fruits from "./Fruits";
import Roots from "./Roots";
import Herbs from "./Herbs";
import Leaves from "./Leaves";
import Parks from "./Parks";
import Nav from "./Nav";

function App() {
  return (
    <div id="page-format">
      <Nav />
      <div id="component-format" style={{flexDirection: 'column'}}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Basket" element={<Basket />}></Route>
          <Route path="/Mushrooms" element={<Mushrooms />}></Route>
          <Route path="/Flowers" element={<Flowers />}></Route>
          <Route path="/Fruits" element={<Fruits />}></Route>
          <Route path="/Roots" element={<Roots />}></Route>
          <Route path="/Herbs" element={<Herbs />}></Route>
          <Route path="/Leaves" element={<Leaves />}></Route>
          <Route path="/Parks" element={<Parks />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  STYLES   //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP
