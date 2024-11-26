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
              <div className="main-section">
                <Carousel title="Top" movies={top} />
                <Carousel title="Upcoming" movies={upcoming} />
                <Carousel title="Popular" movies={popular} />
              </div>
            }
          />
          <Route path="/movie/:movieId" element={<MovieDetailPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
