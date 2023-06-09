import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";
import Loader from "./components/Loader/Loader";

const Home = React.lazy(() => import("./pages/Home/Home"));
const TopManga = React.lazy(() => import("./pages/TopManga/TopManga"));
const TopAnime = React.lazy(() => import("./pages/TopAnime/TopAnime"));
const MangaMoreInfo = React.lazy(() =>
  import("./pages/MangaMoreInfo/MangaMoreInfo")
);
const AnimeMoreInfo = React.lazy(() =>
  import("./pages/AnimeMoreInfo/AnimeMoreInfo")
);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="top/manga" element={<TopManga />} />
          <Route path="top/anime" element={<TopAnime />} />
          <Route path="manga/:mal_id" element={<MangaMoreInfo />} />
          <Route path="anime/:mal_id" element={<AnimeMoreInfo />} />
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
