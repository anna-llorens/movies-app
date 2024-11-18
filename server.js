import express from "express";
import { renderToString } from "react-dom/server";
import App from "./src/App";
import { StaticRouter } from "react-router-dom/server";

const app = express();
app.use(express.static("public"));

app.get("*", (req, res) => {
  const html = renderToString(
    <StaticRouter location={req.url}>
      <App />
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
  console.info(`App running at http:localhost:${port}`);
});
