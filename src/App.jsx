import { Route, Routes } from "react-router-dom";
import { Header, Carousel } from "./components";
import { MovieDetailPage } from "./pages/MovieDetailPage";

const App = ({ initialData = {} }) => {
  const { top, upcoming, popular } = initialData || [];

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel
                  title="Top rated movies"
                  movies={top}
                  listType={"top_rated"}
                />
                <Carousel
                  title="Upcoming movies"
                  movies={upcoming}
                  listType={"upcoming"}
                />
                <Carousel
                  title="Most Popular movies"
                  movies={popular}
                  listType={"popular"}
                />
              </>
            }
          />
          <Route path="/movie/:movieId" element={<MovieDetailPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
