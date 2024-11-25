import { Route, Routes } from "react-router-dom";
import { Header, Carousel } from "./components";
import { MovieDetail } from "./pages/MovieDetail";

import { fetchMovies } from "./api";

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
                <Carousel
                  title="Top"
                  fetchMovies={() => fetchMovies("top_rated")}
                />
                <Carousel
                  title="Upcoming"
                  fetchMovies={() => fetchMovies("upcoming")}
                />
                <Carousel
                  title="Popular"
                  fetchMovies={() => fetchMovies("popular")}
                />
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
