import { Route, Routes } from "react-router-dom";
import { Header, Carousel } from "./components";
import { MovieDetail } from "./pages/MovieDetail";

import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetcComingMovies,
} from "./api";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <div className="carrousels-wrapper">
                <Carousel title="Top" fetchMovies={fetchTopRatedMovies} />
                <Carousel title="Upcoming" fetchMovies={fetcComingMovies} />
                <Carousel title="Popular" fetchMovies={fetchPopularMovies} />
              </div>
            }
          />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
