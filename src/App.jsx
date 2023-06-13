import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";

const Home = React.lazy(() => import("./pages/Home/Home"));
const TopManga = React.lazy(() => import("./pages/TopManga/TopManga"));

const App = () => {
  return (
    <Suspense fallback={false}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="topmanga" element={<TopManga />} />
          {/* <Route path="about" element={<About />}>
        
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
