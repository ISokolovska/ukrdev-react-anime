import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import SharedLayout from "./SharedLayout/SharedLayout";
// import About from "path/to/pages/About";
// import Products from "path/to/pages/Products";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetails />} /> */}
      </Route>
    </Routes>
  );
};
