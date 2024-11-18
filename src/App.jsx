import { Route, Routes } from "react-router-dom";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <div>
        <h1>Movies app</h1>
      </div>
    </>
  );
};

export default App;
