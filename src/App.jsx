import React from "react";
import { Routes, Route } from "react-router-dom";
// import { Home } from "./pages/Home";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { Suspense } from "react";
// import About from "path/to/pages/About";
// import Products from "path/to/pages/Products";
const Home = React.lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Suspense fallback={false}>
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
    </Suspense>
  );
};

export default App;
