import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Carts from "./pages/carts/Carts";

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
          </Route>
          <Route path="/details">
            <Route path=":product_id" element={<Details/>} />
          </Route>
          <Route path="/cart">
          <Route index element={<Carts/>} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
