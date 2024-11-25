import express from "express";
import { renderToString } from "react-dom/server";
import App from "./src/App";
import { StaticRouter } from "react-router-dom/server";
import { fetchMovies } from "./src/api";

const app = express();
app.use(express.static("public"));

app.get("*", async (req, res) => {
  let initialData = {
    top: [],
    upcoming: [],
    popular: [],
  };

  try {
    const [top, upcoming, popular] = await Promise.all([
      fetchMovies("top_rated"),
      fetchMovies("upcoming"),
      fetchMovies("popular"),
    ]);

    initialData = { top, upcoming, popular };
  } catch (error) {
    console.error("Error fetching movie lists for SSR:", error);
  }

  const html = renderToString(
    <StaticRouter location={req.url}>
      <App initialData={initialData} />
    </StaticRouter>
  );

  res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Movies App</title>
        <script>
          // Pass initial data to the client
          window.__INITIAL_DATA__ = ${JSON.stringify(initialData)};
        </script>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `
  );
});

const port = 3000;

app.listen(port, () => {
  console.info(`App running at http://localhost:${port}`);
});
